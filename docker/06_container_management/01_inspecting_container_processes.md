# Inspecting container processes

## Table of contents
* [top](#top)
* [stats](#stats)

## Top
```
$ docker container top --help

Usage:	docker container top CONTAINER [ps OPTIONS]

Display the running processes of a container
```

## Stats
```
$ docker container stats --help

Usage:	docker container stats [OPTIONS] [CONTAINER...]

Display a live stream of container(s) resource usage statistics

Options:
  -a, --all             Show all containers (default shows just running)
      --format string   Pretty-print images using a Go template
      --no-stream       Disable streaming stats and only pull the first result
      --no-trunc        Do not truncate output
```