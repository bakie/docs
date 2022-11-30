# Docker hub

## Table of contents
* [Distributing images on Docker bub](#distributing-images-on-docker-bub)
* [Additional docs](#additional-docs)


## Distributing images on Docker bub
For this to work we need a docker hub account. So make sure you have one

Docker login help
```
$ docker login --help
  
Usage:	docker login [OPTIONS] [SERVER]

Log in to a Docker registry.
If no server is specified, the default is defined by the daemon.

Options:
-p, --password string   Password
    --password-stdin    Take the password from stdin
-u, --username string   Username
```
To login into docker hub via the command line, simply run `docker login`
```
$ docker login
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
Username: <USERNAME>
Password: <PASSWORD>
Login Succeeded
```
After login we can push an image to docker hub using `docker image push`
```
$ docker image push <USERNAME>/<IMAGE_NAME>:<TAG>
```

## Additional docs
* [docker hub](https://hub.docker.com/)