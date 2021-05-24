import mock
import os
from click.testing import CliRunner

from kappa.cli.bento_service import create_bento_service_cli
from kappa.cli.gamma_service import add_gamma_service_sub_command
from kappa.configuration import expand_env_var


FILE_SYSTEM_REPOSITORY = expand_env_var(os.path.join("~", "kappa", "repository"))
SQLITE_DATABASE_URL = "sqlite:///" + expand_env_var(
    os.path.join("~", "kappa", "storage.db")
)


def test_gamma_service_start():
    runner = CliRunner()

    cli = create_bento_service_cli()
    add_gamma_service_sub_command(cli)

    gamma_service_start_cmd = cli.commands["gamma-service-start"]

    with mock.patch(
        "kappa.cli.gamma_service.start_gamma_service_grpc_server"
    ) as mocked_start_gamma_service_grpc_server:
        runner.invoke(gamma_service_start_cmd)
        mocked_start_gamma_service_grpc_server.assert_called()
        mocked_start_gamma_service_grpc_server.assert_called_with(
            db_url=SQLITE_DATABASE_URL,
            grpc_port=50051,
            ui_port=3000,
            with_ui=True,
            base_url=".",
            repository_type="file_system",
            file_system_directory=FILE_SYSTEM_REPOSITORY,
            s3_url=None,
            s3_endpoint_url=None,
            gcs_url=None,
        )

        runner.invoke(gamma_service_start_cmd, ["--repo-base-url=s3://url_address"])
        mocked_start_gamma_service_grpc_server.assert_called()
        mocked_start_gamma_service_grpc_server.assert_called_with(
            db_url=SQLITE_DATABASE_URL,
            grpc_port=50051,
            ui_port=3000,
            with_ui=True,
            base_url=".",
            repository_type="s3",
            file_system_directory=FILE_SYSTEM_REPOSITORY,
            s3_url="s3://url_address",
            s3_endpoint_url=None,
            gcs_url=None,
        )

        runner.invoke(gamma_service_start_cmd, ["--repo-base-url=gs://url_address"])
        mocked_start_gamma_service_grpc_server.assert_called()
        mocked_start_gamma_service_grpc_server.assert_called_with(
            db_url=SQLITE_DATABASE_URL,
            grpc_port=50051,
            ui_port=3000,
            with_ui=True,
            base_url=".",
            repository_type="gcs",
            file_system_directory=FILE_SYSTEM_REPOSITORY,
            s3_url=None,
            s3_endpoint_url=None,
            gcs_url="gs://url_address",
        )


def test_gamma_service_start_repository_types():
    runner = CliRunner()

    cli = create_bento_service_cli()
    add_gamma_service_sub_command(cli)

    gamma_service_start_cmd = cli.commands["gamma-service-start"]

    with mock.patch(
        "kappa.cli.gamma_service.start_gamma_service_grpc_server"
    ) as mocked_start_gamma_service_grpc_server:
        runner.invoke(gamma_service_start_cmd, ["--repository-type=s3"])
        mocked_start_gamma_service_grpc_server.assert_not_called()

        runner.invoke(gamma_service_start_cmd, ["--repository-type=gcs"])
        mocked_start_gamma_service_grpc_server.assert_not_called()

        runner.invoke(
            gamma_service_start_cmd,
            ["--repository-type=s3", "--s3-url=s3://url_address"],
        )
        mocked_start_gamma_service_grpc_server.assert_called()
        mocked_start_gamma_service_grpc_server.assert_called_with(
            db_url=SQLITE_DATABASE_URL,
            grpc_port=50051,
            ui_port=3000,
            with_ui=True,
            base_url=".",
            repository_type="s3",
            file_system_directory=FILE_SYSTEM_REPOSITORY,
            s3_url="s3://url_address",
            s3_endpoint_url=None,
            gcs_url=None,
        )

        runner.invoke(
            gamma_service_start_cmd,
            [
                "--repository-type=s3",
                "--s3-url=s3://url_address",
                "--s3-endpoint-url=s3://endpoint_url_address",
            ],
        )
        mocked_start_gamma_service_grpc_server.assert_called()
        mocked_start_gamma_service_grpc_server.assert_called_with(
            db_url=SQLITE_DATABASE_URL,
            grpc_port=50051,
            ui_port=3000,
            with_ui=True,
            base_url=".",
            repository_type="s3",
            file_system_directory=FILE_SYSTEM_REPOSITORY,
            s3_url="s3://url_address",
            s3_endpoint_url="s3://endpoint_url_address",
            gcs_url=None,
        )

        runner.invoke(
            gamma_service_start_cmd,
            ["--repository-type=gcs", "--gcs-url=gs://url_address"],
        )
        mocked_start_gamma_service_grpc_server.assert_called()
        mocked_start_gamma_service_grpc_server.assert_called_with(
            db_url=SQLITE_DATABASE_URL,
            grpc_port=50051,
            ui_port=3000,
            with_ui=True,
            base_url=".",
            repository_type="gcs",
            file_system_directory=FILE_SYSTEM_REPOSITORY,
            s3_url=None,
            s3_endpoint_url=None,
            gcs_url="gs://url_address",
        )
