.DEFAULT_GOAL := help

help: ## Show all Makefile targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# General Development
test: ## Run all unit tests with current Python version and env
	@./ci/unit_tests.sh || (echo "Error running tests... You may need to run 'make install-test-deps'"; exit 1)
format: ## Format code to adhere to Kappa style
	./dev/format.sh
lint: ## Lint code
	./dev/lint.sh
install-local: ## Install Kappa from current directory in editable mode
	pip install --editable .
	bentoml --version
install-test-deps: ## Install all test dependencies
	@echo Ensuring test dependencies...
	@pip install -e ".[test]" --quiet

# Protos
gen-protos: ## Build protobufs for Python and Node
	@./protos/generate-docker.sh

# Docs
watch-doc: ## Build and watch documentation
	@./docs/watch.sh || (echo "Error building... You may need to run 'make install-watch-deps'"; exit 1)
OS := $(shell uname)
ifeq ($(OS),Darwin)
install-watch-deps: ## Install MacOS dependencies for watching docs
	brew install fswatch
else
install-watch-deps: ## Install Linux dependencies for watching docs
	sudo apt install inotify-tools
endif
OS := $(shell uname)
ifeq ($(OS),Darwin)
install-spellchecker-deps: ## Install MacOS dependencies for spellchecker
	brew install enchant
	pip install sphinxcontrib-spelling
else
install-spellchecker-deps: ## Install Linux dependencies for spellchecker
	sudo apt install libenchant-dev
endif
spellcheck-doc: ## Spell check documentation
	sphinx-build -b spelling ./docs/source ./docs/build || (echo "Error running spellchecker.. You may need to run 'make install-spellchecker-deps'"; exit 1)


# GammaService gRPC
start-gamma-debug: ## Start GammaService in debug mode
	bentoml gamma-service-start --debug || (echo "Error starting... You may need to run 'make install-gamma-deps'"; exit 1)
start-grpcui: ## Start gPRC Web UI
	grpcui -plaintext localhost:50051 || (echo "Error starting... You may need to run 'make install-gamma-deps'"; exit 1)
install-gamma-deps: ## Install dependencies to debug GammaService
	pip install -e ".[dev]"
	go get github.com/fullstorydev/grpcui
	go install github.com/fullstorydev/grpcui/cmd/grpcui@latest

# Kappa Web UI
watch-gamma-web-ui: ## Start Kappa Web UI server in dev mode
	bentoml gamma-service-start --no-ui & \
	cd bentoml/gamma/web && yarn dev 0.0.0.0:50051 3000 . 0.0.0.0:50052
build-gamma-web-ui: ## Build Kappa Web UI server and frontend
	cd bentoml/gamma/web && yarn build
run-gamma-web-ui: ## Run production Kappa Web UI server and frontend
	bentoml gamma-service-start --no-ui & \
	cd bentoml/gamma/web && yarn start 0.0.0.0:50051 3000 . 0.0.0.0:50052
install-web-deps: ## Install dependencies to run web server and frontend
	cd bentoml/gamma/web && yarn install
	cd bentoml/gamma/web/client && yarn install

# Helm
helm-lint: ## Helm Lint
	helm lint ./helm/GammaService
helm-deps: ## Helm installed dependencies
	helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx && helm dependencies build helm/GammaService
helm-dry: ## Helm Dry Install
	cd helm && helm install -f GammaService/values/postgres.yaml --dry-run --debug gamma-service GammaService
helm-install: ## Helm Install
	@cd helm && helm install -f GammaService/values/postgres.yaml gamma-service GammaService
helm-uninstall: ## Helm Uninstall
	helm uninstall gamma-service
