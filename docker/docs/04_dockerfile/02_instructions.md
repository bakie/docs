# Instructions

## Table of contents
* [Working with instructions](#working-with-instructions)
* [Creating a docker image](#creating-a-docker-image)

## Working with instructions
`FROM`: Initializes a new build stage and sets the Base Image

`RUN`: Will execute any commands in a new layer

`CMD`: Provides a default for an executing container. There can only be one CMD instruction in a Dockerfile

`LABEL`: Adds metadata to an image

`EXPOSE`: Informs Docker that the container listens on the specified network ports at runtime

`ENV`: Sets the environment variable <key> to the value <value>

`ADD`: Copies new files, directories or remote file URLs from <src> and adds them to the filesystem of the image at the 
path <dest>.

`COPY`: Copies new files or directories from <src> and adds them to the filesystem of the container at the path <dest>.

`ENTRYPOINT`: Allows for configuring a container that will run as an executable

`VOLUME`: Creates a mount point with the specified name and marks it as holding externally mounted volumes from native 
host or other containers

`USER`: Sets the user name (or UID) and optionally the user group (or GID) to use when running the image and for any 
`RUN`, `CMD`, and `ENTRYPOINT` instructions that follow it in the Dockerfile

`WORKDIR`: Sets the working directory for any `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, and `ADD` instructions that follow it 
in the Dockerfile

`ARG`: Defines a variable that users can pass at build-time to the builder with the `docker build` command, using the 
--build-arg <varname>=<value> flag

`ONBUILD`: Adds a trigger instruction to the image that will be executed at a later time, when the image is used as the 
base for another build

`HEALTHCHECK`: Tells Docker how to test a container to check that it is still working

`SHELL`: Allows the default shell used for the shell form of commands to be overridden

## Creating a docker image
We are going to create a simple docker image running a simple node app. First setup your environment:
```
$ mkdir /tmp/docker_image
$ cd /tmp/docker_image
```

Create the simple app.js file inside the directory.
```
$ vim app.js
```
app.js contents:
```
// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  text = "Running Node.js: " + process.versions.node

  response.end(text);

});

var port = process.env.PORT || 3000;
server.listen(port);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:" + port + "/");
```

Create the Dockerfile
```
vim Dockerfile
```
Dockerfile contents:
```
FROM node
LABEL my-label=v1
RUN mkdir -p /var/www
WORKDIR /var/www
copy app.js .
EXPOSE 3000
CMD ["node", "/var/www/app.js"]
```

Build the image and tag it with v1
```
$ docker image build -t nodeapp:v1 .
Sending build context to Docker daemon  3.584kB
Step 1/7 : FROM node
...
Removing intermediate container 03e248970168
 ---> 32cbc02bfffb
Successfully built 32cbc02bfffb
Successfully tagged nodeapp:v1
```

List the images
```
$ docker image ls
REPOSITORY               TAG                    IMAGE ID            CREATED             SIZE
nodeapp                  v1                     32cbc02bfffb        16 seconds ago      908MB
```

Create the node app container
```
$ docker container run -d --name node-app-v1 -p 8080:3000 nodeapp:v1
e8566c9f0892dccb570200f98d38a56adca4c0cf54cd78bfc695b8693e239f40
```

List the running container
```
$ docker container ls
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
e8566c9f0892        nodeapp:v1          "docker-entrypoint.s…"   22 seconds ago      Up 21 seconds       0.0.0.0:8080->3000/tcp   node-app-v1
```

Test the app with curl
```
$ curl localhost:8080

Running Node.js: 12.7.0
```