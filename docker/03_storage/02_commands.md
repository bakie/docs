# Networking commands

## Table of contents
* [commands](#commands)
* [Bind mounts](#bind-mounts)
* [Volumes](#volumes)

## Commands
```
$ docker volume --help

Usage:	docker volume COMMAND

Manage volumes

Commands:
  create      Create a volume
  inspect     Display detailed information on one or more volumes
  ls          List volumes
  prune       Remove all unused local volumes
  rm          Remove one or more volumes
```

## Bind mounts
With bind mount, a file or directory on the host machine is mounted into a container.

Volumes use a new directory that is created within Docker’s storage directory on the host machine, 
and Docker manages that directory’s contents.

Using the mount flag:
```
$ mkdir /tmp/target
$ docker container run -d --name nginx-bind-mount1 --mount type=bind,source=/tmp/target,target=/app nginx
7a2687e195d965587f9c1d108d2f919802bad9ec0bcd9714555df2a737d4f0d8
```

Using the volume flag:
```
$ mkdir /tmp/target2
$ docker container run -d --name nginx-bind-mount2 -v /tmp/target2:/app nginx
97c5c9213f1fe3d135ca8d3fa74a352d2b94c5ecfad2933a1a65fdd943d5be27
```

Bind mounts won't show up when listing volumes. You have to inspect the container to find the bind mount:
```
$ docker container inspect nginx-bind-mount1
...
"Mounts": [
    {
        "Type": "bind",
        "Source": "/tmp/target",
        "Destination": "/app",
        "Mode": "",
        "RW": true,
        "Propagation": "rprivate"
    }
],
...
```

## Volumes
Volume drivers allow for:
* Storing volumes on remote hosts or cloud providers
* Encrypting the contents of volumes
* Add other functionality

New volumes can have their content pre-populated by a container.

Using the mount flag:
```
$ docker volume create html-volume1
html-volume1
$ docker container run -d --name nginx-volume1 --mount type=volume,source=html-volume1,target=/usr/share/nginx/html/ nginx
c0eba580bcc039cc2b55e246974cd60a9f6d846ab35bdfc2c564520d0bbd94cc
```

Using the volume flag:
```
$ docker volume create html-volume2
html-volume2
$ docker container run -d --name nginx-volume2 -v html-volume2:/usr/share/nginx/html/ nginx
9dce234a0f82e953a5e17aadc18ab10af105c185876b82b43314ddbc0058e989
```

Inspect the volume
```
$ docker volume inspect html-volume1
[
    {
        "CreatedAt": "2019-07-25T20:31:31+02:00",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/html-volume1/_data",
        "Name": "html-volume1",
        "Options": {},
        "Scope": "local"
    }
]
```
