#!/usr/bin/env bash

set -e

docker-sync clean -c docker/dev/docker-sync.yml
docker-sync start -c docker/dev/docker-sync.yml
docker-compose -f docker/dev/docker-compose.yml up --build -d
docker exec -it <%= projectName %> /bin/bash --init-file docker/dev/.bash_profile
