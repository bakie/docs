# Non-privileged user

## Table of contents
* [Working with non-privileged user](#working-with-non-privileged-user)
* [Connecting as privileged user](#connecting-as-privileged-user)

## Working with non-privileged user
Rather than using root, we can use a non-privileged user to configure and run an application. We do this by using the 
`USER` instruction. Any instruction we run after setting the user will be executed as that user.

We are going to change our simple node app so we run it as the node_user user.
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
  text += " Port: " + process.env.PORT
  text += " Environment: " + process.env.NODE_ENV

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
ENV NODE_ENV="development"
ENV PORT 3000
ARG SRC_DIR=/home/node_user
RUN useradd -ms /bin/bash node_user
RUN mkdir -p $SRC_DIR
WORKDIR $SRC_DIR
copy app.js .
EXPOSE $PORT
CMD ["node", "app.js"]
```

Build the image and tag it with v4
```
$ docker image build -t nodeapp:v4 .
Sending build context to Docker daemon  3.584kB
Step 1/11 : FROM node
...
Removing intermediate container d49bd59a6019
 ---> 7ec0b65573ec
Successfully built 7ec0b65573ec
Successfully tagged nodeapp:v4
```

Create the node app container
```
$ docker container run -d --name node-app-v4 -p 8084:3000 nodeapp:v4
91d7392e5d33848404ababb919bad719a96a40d972c868deac091b095febf9f9
```

List the running container
```
$ docker container ls
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                              NAMES
91d7392e5d33        nodeapp:v4          "docker-entrypoint.s…"   13 seconds ago      Up 12 seconds       0.0.0.0:8084->3000/tcp             node-app-v4
392eb6d46f0a        nodeapp:v2          "docker-entrypoint.s…"   9 seconds ago       Up 8 seconds        3000/tcp, 0.0.0.0:8081->3001/tcp   node-app-v2
e8566c9f0892        nodeapp:v1          "docker-entrypoint.s…"   19 minutes ago      Up 19 minutes       0.0.0.0:8080->3000/tcp             node-app-v1
```

Test the app with curl
```
$ curl localhost:8084

Running Node.js: 12.7.0 Port: 3000 Environment: development
```

## Connecting as privileged user
You can connect to a container as a privileged user by using the `-u` flag. The root user always has id 0.
```
$ docker container exec -u 0 -it <container> /bin/bash
```