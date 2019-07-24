# Logging

## Table of contents
* [View logs](#view-logs)

##View logs
There are 2 ways to check logs in docker.

Show information logged by a running container
```
$ docker container logs <NAME>
```

Show  information logged by all containers participating in a service
```
$ docker service logs <SERVICE>
```

Important! Logs need to be output to `STDOUT` and `STDERR`.
Nginx example:
```
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log
```
