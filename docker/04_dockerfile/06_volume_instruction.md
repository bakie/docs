# Volume instruction

## Table of contents
* [Working with volume instruction](#working-with-volume-instruction)


## Working with volume instruction
When using the `VOLUME` instruction we automatically create a mount point in a Docker image. 
When a container is created using this image, a volume will be created and mounted to the specified directory.

To illustrate this, we are going to create a simple nginx image with one volume.
```
$ mkdir /tmp/docker_volume_image
$ cd /tmp/docker_volume_image
```

Create the Dockerfile
```
vim Dockerfile
```

Dockerfile contents:
```
FROM nginx:latest
VOLUME ["/usr/share/nginx/html/"]
```

Build the image
```
$ docker image build -t docker_volume:v1 .
Sending build context to Docker daemon  2.048kB
Step 1/2 : FROM nginx:latest
...
Removing intermediate container 2b10cd5f3216
 ---> 37afec657577
Successfully built 37afec657577
Successfully tagged docker_volume:v1
```

Create a new container
```
$ docker container run -d --name nginx-volume docker_volume:v1
bac45d496971d8178f6ff57defce36e018639c9e7d9680402fe6ea3566cbf2a7
```

Inspect nginx-volume:
```
$ docker container inspect nginx-volume
...
"Mounts": [
    {
        "Type": "volume",
        "Name": "5ee20c08d8679fecb71dadd851b54727077af6914761f4963238d9cbb636dd7f",
        "Source": "/var/lib/docker/volumes/5ee20c08d8679fecb71dadd851b54727077af6914761f4963238d9cbb636dd7f/_data",
        "Destination": "/usr/share/nginx/html",
        "Driver": "local",
        "Mode": "",
        "RW": true,
        "Propagation": ""
    }
],
...
```

Check the mounted volume contents:
```
$ ls -l /var/lib/docker/volumes/5ee20c08d8679fecb71dadd851b54727077af6914761f4963238d9cbb636dd7f/_data
total 8
-rw-r--r-- 1 root root 494 Jul 23 13:45 50x.html
-rw-r--r-- 1 root root 612 Jul 23 13:45 index.html
```
