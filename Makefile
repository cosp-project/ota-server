DOCKER = docker
IMAGE = cosp-project/ota-server
TAG = $(shell git rev-parse --abbrev-ref HEAD)

build: Dockerfile
	$(DOCKER) build -t $(IMAGE):$(TAG) .

latest: Dockerfile
	$(DOCKER) build -t $(IMAGE):latest .

.PHONY: build
