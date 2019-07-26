# Environment variables

## Table of contents
* [Using environment variables](#using-environment-variables)

## Using environment variables
We can use ENV to update the PATH environment variable for the software that your container installs.

Use the `--env` flag to pass an environment variable when building an image:
```
--env <key>=<value>
```

Use the ENV instruction in the Dockerfile:
```
ENV <key> <value>
ENV <key>=<value>
```

We are going to change the simple node app so we can specify the port and the deploy environment:
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
RUN mkdir -p /var/www
WORKDIR /var/www
copy app.js .
EXPOSE $PORT
CMD ["node", "app.js"]
```

Build the image and tag it with v2
```
$ docker image build -t nodeapp:v2 .
Sending build context to Docker daemon  3.584kB
Step 1/9 : FROM node
...
Removing intermediate container 3c3a6f5aa142
 ---> ec43107eae98
Successfully built ec43107eae98
Successfully tagged nodeapp:v2
```

List the images
```
$ docker image ls
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
nodeapp             v2                  ec43107eae98        19 seconds ago      908MB
nodeapp             v1                  b6704f6ced33        14 minutes ago      908MB
```

Inspect the image to see the environment variables
```
$ docker image inspect nodeapp:v2
...
"Env": [
    "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
    "NODE_VERSION=12.7.0",
    "YARN_VERSION=1.17.3",
    "NODE_ENV=development",
    "PORT=3000"
],
...
```

Create the node app container and run it using port 3001
```
$ docker container run -d --name node-app-v2 -p 8081:3001 --env PORT=3001 nodeapp:v2
392eb6d46f0afb360f1a3e0fd6d9277e14b03da59a282ff4441e2c025bd9728e
```

List the running container
```
$ docker container ls
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                              NAMES
392eb6d46f0a        nodeapp:v2          "docker-entrypoint.s…"   9 seconds ago       Up 8 seconds        3000/tcp, 0.0.0.0:8081->3001/tcp   node-app-v2
e8566c9f0892        nodeapp:v1          "docker-entrypoint.s…"   19 minutes ago      Up 19 minutes       0.0.0.0:8080->3000/tcp             node-app-v1
```

Test the app with curl
```
$ curl localhost:8081

Running Node.js: 12.7.0 Port: 3001 Environment: development
```

Using the `--env` flag we can also easily change the NODE_ENV
```
$ docker container run -d --name node-app-v2a -p 8082:3002 --env PORT=3002 --env NODE_ENV=production nodeapp:v2
```

Test it with curl
```
$ curl localhost:8082

Running Node.js: 12.7.0 Port: 3002 Environment: production
```