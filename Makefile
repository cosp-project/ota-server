DOCKER = docker
IMAGE = divadsn/cosp-otaserver
TAG = $(shell git rev-parse --abbrev-ref HEAD)

build: Dockerfile
	$(DOCKER) build -t $(IMAGE):$(TAG) .

latest: Dockerfile
	$(DOCKER) build -t $(IMAGE):latest --build-arg KEY=${KEY} --build-arg SECRET=${SECRET} .

.PHONY: build
