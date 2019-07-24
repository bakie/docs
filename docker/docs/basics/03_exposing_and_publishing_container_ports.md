# Exposing and publishing container ports

## Table of contents
* [Expose](#expose)
* [Publish](#publish)
    * [tcp/udp](#tcpudp)

## Expose
* Expose a port or a range of ports
* This does not publish the port
* Exposing a port makes it available to be mapped by using the -p or -P flag
* Use --expose <PORT>

```
$ docker container run --expose 3000 <IMAGE>
```
Example:
```
$ docker container run -d --expose 3000 nginx
f3146f5c7664e194799fddf74da45304e87486e9f67f20b3c04d8bf8e4c5252f

$ docker container ls
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
f3146f5c7664        nginx               "nginx -g 'daemon of…"   3 seconds ago       Up 2 seconds        80/tcp, 3000/tcp    vibrant_dewdney
```
The port 3000 is now listed under the PORTS.

## Publish
* Maps a container's port
* `-p, --publish`: Used to list a published container's port(s) to the host
* `-P, --publish-all`: Used to publish all exposed ports to random ports
Example:
```
$ docker container run -d --expose 3000 -p 8080:80 nginx
9849bac461694d41874550ef986d45c38f19424d41d5b0e64ab3dcb9cf3bfa0b

$ docker container ls
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                            NAMES
9849bac46169        nginx               "nginx -g 'daemon of…"   14 seconds ago      Up 13 seconds       3000/tcp, 0.0.0.0:8080->80/tcp   boring_elgamal
```
Under PORTS you can see the mapping of port 8080 on localhost to 80 on the container.
We don't map the port 8080 to port 3000 because nothing is listening on port 3000 inside the container.
Nginx listens on port 80. So if we run a curl on localhost:8080 we get the result back from the nginx.
```
$ curl localhost:8080
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
...
```

To list all mapped ports of a container, you can use the following command
```
$ docker container port <CONTAINER>
80/tcp -> 0.0.0.0:8080
```

### tcp/udp
We have the ability to both map tcp and udp port, but you need to specify this separately.
```
$ docker container run -d -p 8080:80/tcp -p 8080:80/udp nginx
4aab9015b7efa6ec622c7cb3f0fb75719332a4954419f163b31c655ef7e42258
```