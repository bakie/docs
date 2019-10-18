# Auto (re)start

## Table of contents
* [restart flag](#restart-flag)

## Restart flag
To configure the restart policy for a container, use the `--restart` flag:
* `no`: Do not automatically restart the container. (the default)
* `on-failure`: Restart the container if it exits due to an error, which manifests as a non-zero exit code.
* `always`: Always restart the container if it stops.
* `unless-stopped`: Similar to always, except that when the container is stopped, it is not restarted even after the Docker daemon restarts.

```
$ docker container run -d --name <NAME> --restart <RESTART> <IMAGE>
```