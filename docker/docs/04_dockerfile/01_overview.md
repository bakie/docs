# Dockerfile overview

## Table of contents
* [Dockerfile](#dockerfile)
* [Additional docs](#additional-docs)

## Dockerfile
Dockerfiles are instructions. They contain all of the commands used to build an image.
* Docker images consist of read-only layers.
* Each represents a Dockerfile instruction.
* Layers are stacked.
* Each layer is a result of the changes from the previous layer.
* Images are built using the `docker image build` command.

Dockerfile:
```
FROM ubuntu:18.04  
COPY . /app  
RUN make /app  
CMD python /app/app.py
```
`FROM` creates a layer from the ubuntu:18.04 Docker image.

`COPY` adds files from your Docker client’s current directory.

`RUN` builds your application with make.

`CMD` specifies what command to run within the container.

## Additional docs
* [dockerfile](https://docs.docker.com/engine/reference/builder/)