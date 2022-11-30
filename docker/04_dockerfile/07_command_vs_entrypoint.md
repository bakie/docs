# Command vs Entrypoint

## Table of contents
* [Command](#command)
* [Entrypoint](#entrypoint)

## Command
The CMD instruction should be used to run the software contained by your image, along with any arguments. 
`CMD` should almost always be used in the form of `CMD ["executable", "param1", "param2"…]`.

### Example
Setup your environment
```
$ mkdir /tmp/entrypoint_vs_command
$ cd /tmp/entrypoint_vs_command
```
Create the Dockerfile
```
vim Dockerfile
```
Dockerfile contents:
```
FROM ubuntu
CMD ["/usr/bin/wc","--help"]
```
Build the image
```
$ docker image build -t cmd:v1 . 
```
Run the container
```
$ docker container run cmd:v1
Usage: /usr/bin/wc [OPTION]... [FILE]...
  or:  /usr/bin/wc [OPTION]... --files0-from=F
...
```
Here we see the output from the command `/usr/bin/wc --help` which has been executed inside the container.

To overwrite the command that is being executed when the containers starts we simply start the container with the 
command we want to execute.
```
$ docker container run cmd:v1 /bin/ls --help
Usage: /bin/ls [OPTION]... [FILE]...
List information about the FILEs (the current directory by default).
Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.
...
```


## Entrypoint
The best use for `ENTRYPOINT` is to set the image’s main command, allowing that image to be run as though it was that 
command (and then use `CMD` as the default flags).

### Example
Setup your environment
```
$ mkdir /tmp/entrypoint_vs_command
$ cd /tmp/entrypoint_vs_command
```
Create the Dockerfile
```
vim Dockerfile
```
Dockerfile contents:
```
FROM ubuntu
ENTRYPOINT ["/usr/bin/wc"]
CMD ["--help"]
```
Build the image
```
$ docker image build -t cmd:v2 . 
```
Run the container
```
$ docker container run cmd:v2
Usage: /usr/bin/wc [OPTION]... [FILE]...
  or:  /usr/bin/wc [OPTION]... --files0-from=F
...
```
Here we see the output from the command `/usr/bin/wc --help` which has been executed inside the container.

Now we can still pass a command when starting a container, which will overwrite the `CMD` from the Dockerfile.
The following will show the version instead of the help output.
```
$ docker container run cmd:v2 --version
wc (GNU coreutils) 8.28
Copyright (C) 2017 Free Software Foundation, Inc.
...
```