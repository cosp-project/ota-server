DOCKER = docker
IMAGE = divadsn/cosp-otaserver
TAG = $(shell date +%Y%m%d)

release:
	$(DOCKER) build -t $(IMAGE):$(TAG) -t $(IMAGE):latest .

deploy:
	$(DOCKER) push $(IMAGE):latest

.PHONY: release
