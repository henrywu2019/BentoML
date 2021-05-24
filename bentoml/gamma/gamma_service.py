import atexit
import logging
import os
import subprocess
import time
from concurrent import futures

import certifi
import click
from bentoml.configuration import get_debug_mode
from bentoml.configuration.containers import BentoMLContainer
from bentoml.exceptions import BentoMLException
from bentoml.utils import reserve_free_port
from bentoml.gamma.grpc_interceptor import (
    PromServerInterceptor,
    ServiceLatencyInterceptor,
)
from bentoml.gamma.utils import ensure_node_available_or_raise, parse_grpc_url
from dependency_injector.wiring import Provide, inject
from prometheus_client import start_http_server


@inject
def get_gamma_service(
    channel_address: str = Provide[BentoMLContainer.config.gamma.remote.url],
    access_token: str = Provide[BentoMLContainer.config.gamma.remote.access_token],
    access_token_header: str = Provide[
        BentoMLContainer.config.gamma.remote.access_token_header
    ],
    tls_root_ca_cert: str = Provide[BentoMLContainer.gamma_tls_root_ca_cert],
    tls_client_key: str = Provide[BentoMLContainer.config.gamma.remote.tls.client_key],
    tls_client_cert: str = Provide[
        BentoMLContainer.config.gamma.remote.tls.client_cert
    ],
    db_url: str = Provide[BentoMLContainer.gamma_database_url],
    default_namespace: str = Provide[BentoMLContainer.config.gamma.namespace],
    repository_type: str = Provide[BentoMLContainer.config.gamma.repository.type],
    file_system_directory: str = Provide[BentoMLContainer.gamma_file_system_directory],
    s3_url: str = Provide[BentoMLContainer.config.gamma.repository.s3.url],
    gcs_url: str = Provide[BentoMLContainer.config.gamma.repository.gcs.url],
    oci_url: str = Provide[BentoMLContainer.config.gamma.repository.oci.url],
):
    if channel_address:
        # Lazily import grpcio for GammaSerivce gRPC related actions
        import grpc
        from bentoml.gamma.client.interceptor import header_client_interceptor
        from bentoml.gamma.proto.gamma_service_pb2_grpc import GammaStub

        channel_address = channel_address.strip()
        logger.debug("Connecting GammaService gRPC server at: %s", channel_address)
        scheme, addr = parse_grpc_url(channel_address)
        header_adder_interceptor = header_client_interceptor.header_adder_interceptor(
            access_token_header, access_token
        )
        if scheme in ("grpcs", "https"):
            tls_root_ca_cert = (
                tls_root_ca_cert or certifi.where()
            )  # default: Mozilla ca cert
            with open(tls_root_ca_cert, "rb") as fb:
                ca_cert = fb.read()
            if tls_client_key:
                with open(tls_client_key, "rb") as fb:
                    tls_client_key = fb.read()
            if tls_client_cert:
                with open(tls_client_cert, "rb") as fb:
                    tls_client_cert = fb.read()
            credentials = grpc.ssl_channel_credentials(
                ca_cert, tls_client_key, tls_client_cert
            )
            channel = grpc.intercept_channel(
                grpc.secure_channel(addr, credentials), header_adder_interceptor
            )
        else:
            channel = grpc.intercept_channel(
                grpc.insecure_channel(addr), header_adder_interceptor
            )
        return GammaStub(channel)
    else:
        from bentoml.gamma.db import DB
        from bentoml.gamma.repository import create_repository
        from bentoml.gamma.gamma_service_impl import get_gamma_service_impl

        LocalGammaService = get_gamma_service_impl()

        logger.debug("Creating local GammaService instance")
        return LocalGammaService(
            repository=create_repository(
                repository_type, file_system_directory, s3_url, gcs_url, oci_url
            ),
            database=DB(db_url),
            default_namespace=default_namespace,
        )


@inject
def start_gamma_service_grpc_server(
    db_url,
    grpc_port,
    ui_port,
    with_ui,
    base_url,
    repository_type,
    file_system_directory,
    s3_url,
    s3_endpoint_url,
    gcs_url,
    oci_url,
    web_ui_log_path: str = Provide[BentoMLContainer.gamma_logging_path],
):
    # Lazily import grpcio for GammaSerivce gRPC related actions
    import grpc
    from bentoml.gamma.db import DB
    from bentoml.gamma.repository import create_repository
    from bentoml.gamma.gamma_service_impl import get_gamma_service_impl
    from bentoml.gamma.proto.gamma_service_pb2_grpc import add_GammaServicer_to_server
    from bentoml.gamma.proto.gamma_service_pb2_grpc import GammaServicer

    GammaServicerImpl = get_gamma_service_impl(GammaServicer)
    gamma_service = GammaServicerImpl(
        repository=create_repository(
            repository_type, file_system_directory, s3_url, s3_endpoint_url, gcs_url, oci_url,
        ),
        database=DB(db_url),
    )

    # Define interceptors here
    grpc_interceptors = [PromServerInterceptor(), ServiceLatencyInterceptor()]
    server = grpc.server(
        futures.ThreadPoolExecutor(max_workers=10), interceptors=grpc_interceptors,
    )
    add_GammaServicer_to_server(gamma_service, server)
    debug_mode = get_debug_mode()
    if debug_mode:
        try:
            logger.debug("Enabling gRPC server reflection for debugging")
            from bentoml.gamma.proto import gamma_service_pb2
            from grpc_reflection.v1alpha import reflection

            SERVICE_NAMES = (
                gamma_service_pb2.DESCRIPTOR.services_by_name["Gamma"].full_name,
                reflection.SERVICE_NAME,
            )
            reflection.enable_server_reflection(SERVICE_NAMES, server)
        except ImportError:
            logger.debug(
                "Failed to enable gRPC server reflection, missing required package: "
                '"pip install grpcio-reflection"'
            )
    server.add_insecure_port(f"[::]:{grpc_port}")

    # NOTE: the current implementation sets prometheus_port to
    # 50052 to accomodate with Makefile setups. Currently there
    # isn't a way to find the reserve_free_port dynamically inside
    # Makefile to find the free ports for prometheus_port without
    # the help of a shell scripts.
    prometheus_port = 50052
    with reserve_free_port() as port:
        prometheus_port = port
    # prevents wsgi to see prometheus_port as used
    start_http_server(prometheus_port)
    server.start()
    if with_ui:
        ensure_node_available_or_raise()
        gamma_grpc_server_address = f"localhost:{grpc_port}"
        prometheus_address = f"http://localhost:{prometheus_port}"
        async_start_gamma_service_web_ui(
            gamma_grpc_server_address,
            prometheus_address,
            ui_port,
            web_ui_log_path,
            debug_mode,
            base_url,
        )

    # We don't import _echo function from click_utils because of circular dep
    if with_ui:
        if debug_mode is True:
            ui_port = 8080
        web_ui_link = f"http://0.0.0.0:{ui_port}"
        if base_url != ".":
            web_ui_link += f"/{base_url}"
        web_ui_message = f"running on {web_ui_link}"
    else:
        web_ui_message = "off"
    if debug_mode:
        prom_ui_message = "off"
    else:
        prom_ui_message = f"running on http://0.0.0.0:{ui_port}/metrics\n"

    click.echo(
        f"* Starting BentoML GammaService gRPC Server\n"
        f'* Debug mode: { "on" if debug_mode else "off"}\n'
        f"* Web UI: {web_ui_message}\n"
        f"* Running on 0.0.0.0:{grpc_port} (Press CTRL+C to quit)\n"
        f"* Prometheus: {prom_ui_message}\n"
        f"* Help and instructions: "
        f"https://docs.bentoml.org/en/latest/guides/gamma_service.html\n"
        f'{f"* Web server log can be found here: {web_ui_log_path}" if with_ui else ""}'
        f"\n-----\n"
        f"* Usage in Python:\n"
        f'*  bento_svc.save(gamma_url="0.0.0.0:{grpc_port}")\n'
        f"*  from bentoml.gamma.client import get_gamma_client\n"
        f'*  get_gamma_client("0.0.0.0:{grpc_port}").repository.list()\n'
        f"* Usage in CLI:\n"
        f"*  bentoml list --gamma-url=0.0.0.0:{grpc_port}\n"
        f"*  bentoml containerize IrisClassifier:latest --gamma-url=0.0.0.0:"
        f"{grpc_port}\n"
        f"*  bentoml push IrisClassifier:20200918001645_CD2886 --gamma-url=0.0.0.0:"
        f"{grpc_port}\n"
        f"*  bentoml pull IrisClassifier:20200918001645_CD2886 --gamma-url=0.0.0.0:"
        f"{grpc_port}\n"
        f"*  bentoml retrieve IrisClassifier:20200918001645_CD2886 "
        f'--gamma-url=0.0.0.0:{grpc_port} --target_dir="/tmp/foo/bar"\n'
        f"*  bentoml delete IrisClassifier:20200918001645_CD2886 "
        f"--gamma-url=0.0.0.0:{grpc_port}\n"
        # TODO: simplify the example usage here once related documentation is ready
    )

    try:
        while True:
            time.sleep(_ONE_DAY_IN_SECONDS)
    except KeyboardInterrupt:
        logger.info("Terminating GammaService gRPC server..")
        server.stop(grace=None)


def _is_web_server_debug_tools_available(root_dir):
    return (
        os.path.exists(os.path.join(root_dir, "node_modules/.bin", "concurrently"))
        and os.path.exists(os.path.join(root_dir, "node_modules/.bin", "ts-node"))
        and os.path.exists(os.path.join(root_dir, "node_modules/.bin", "nodemon"))
    )


def async_start_gamma_service_web_ui(
    gamma_server_address,
    prometheus_address,
    ui_port,
    base_log_path,
    debug_mode,
    web_prefix_path,
):
    if ui_port is not None:
        ui_port = ui_port if isinstance(ui_port, str) else str(ui_port)
    web_ui_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "web"))
    web_prefix_path = web_prefix_path.strip("/")
    if debug_mode:
        # Only when src/index.ts exists, we will run dev (nodemon)
        if os.path.exists(
            os.path.join(web_ui_dir, "src/index.ts")
        ) and _is_web_server_debug_tools_available(web_ui_dir):
            web_ui_command = [
                "npm",
                "run",
                "dev",
                "--",
                gamma_server_address,
                ui_port,
                base_log_path,
                web_prefix_path,
                prometheus_address,
            ]
        else:
            web_ui_command = [
                "node",
                "dist/bundle.js",
                gamma_server_address,
                ui_port,
                base_log_path,
                web_prefix_path,
                prometheus_address,
            ]
    else:
        if not os.path.exists(os.path.join(web_ui_dir, "dist", "bundle.js")):
            raise BentoMLException(
                "Gamma web client built is missing. "
                "Please run `npm run build` in the bentoml/gamma/web directory "
                "and then try again"
            )
        web_ui_command = [
            "node",
            "dist/bundle.js",
            gamma_server_address,
            ui_port,
            base_log_path,
            web_prefix_path,
            prometheus_address,
        ]

    web_proc = subprocess.Popen(
        web_ui_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, cwd=web_ui_dir
    )

    is_web_proc_running = web_proc.poll() is None
    if not is_web_proc_running:
        web_proc_output = web_proc.stdout.read().decode("utf-8")
        logger.error(f"return code: {web_proc.returncode} {web_proc_output}")
        raise BentoMLException("Gamma web ui did not start properly")

    atexit.register(web_proc.terminate)


_ONE_DAY_IN_SECONDS = 60 * 60 * 24
logger = logging.getLogger(__name__)
