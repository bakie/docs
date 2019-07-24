# Containers

## Table of contents
* [Help](#help)
* [Basic commands](#basic-commands)
    * [Run container](#run-container)
    * [List containers](#list-containers)
    * [Executing commands](#executing-commands)

## Help
```
$ docker container --help

Usage:	docker container COMMAND

Manage containers

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  exec        Run a command in a running container
  export      Export a container's filesystem as a tar archive
  inspect     Display detailed information on one or more containers
  kill        Kill one or more running containers
  logs        Fetch the logs of a container
  ls          List containers
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  prune       Remove all stopped containers
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  run         Run a command in a new container
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes

Run 'docker container COMMAND --help' for more information on a command.
```

## Basic commands
### Run container
```
$ docker container run <CONTAINER_NAME>
```
This is a list of the most used options. For a full list run `docker container run --help`
```
Options:
  -d, --detach                         Run container in background and print container ID
  -i, --interactive                    Keep STDIN open even if not attached
      --name string                    Assign a name to the container
  -p, --publish list                   Publish a container's port(s) to the host
      --rm                             Automatically remove the container when it exits
  -t, --tty                            Allocate a pseudo-TTY
```

### List containers
```
$ docker container ls
```
```
Options:
  -a, --all             Show all containers (default shows just running)
  -f, --filter filter   Filter output based on conditions provided
      --format string   Pretty-print containers using a Go template
  -n, --last int        Show n last created containers (includes all states) (default -1)
  -l, --latest          Show the latest created container (includes all states)
      --no-trunc        Don't truncate output
  -q, --quiet           Only display numeric IDs
  -s, --size            Display total file sizes
```

## Executing commands
There are a couple of ways to execute command on a container
* Specify the command in the Dockerfile
* During a docker run
* using the `exec` command

Start a container with a command.
```
$ docker container run <IMAGE> <CMD>
```

Execute a command on running container
```
$ docker container exec -it <IMAGE> <CMD>
```