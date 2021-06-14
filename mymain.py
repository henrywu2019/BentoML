import sys
from dependency_injector import containers, providers
from dependency_injector.wiring import inject, Provide


class ApiClient:
    def __init__(self, api_key: str, timeout: int):
        self.api_key = api_key  # <-- dependency is injected
        self.timeout = timeout  # <-- dependency is injected


class Service:
    def __init__(self, api_client: ApiClient):
        self.api_client = api_client  # <-- dependency is injected


class Container(containers.DeclarativeContainer):
    config = providers.Configuration()
    api_client = providers.Singleton(
        ApiClient,
        api_key=config.api_key or "",
        timeout=config.timeout or 1,
    )
    service = providers.Factory(
        Service,
        api_client=api_client,
    )


@inject
def main(service: Service = Provide[Container.service]):
    a = service
    print(a.api_client.api_key)
    print(a.api_client.timeout)


if __name__ == '__main__':
    container = Container()
    #container.config.api_key.from_env('API_KEY')
    container.config.api_key.set("123")
    container.config.timeout.from_env('TIMEOUT')
    container.wire(modules=[sys.modules[__name__]])

    main()
