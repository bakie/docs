# Build arguments

## Table of contents
* [Using build arguments](#using-build-arguments)

## Using build arguments
We can use build arguments to paramerterize an image build. Note that ARG is only available during the build of a Docker
image (RUN etc), not after the image is created and containers are started from it (ENTRYPOINT, CMD). You can achieve 
this by using environment variables. 

Use the `--build-arg` flag when building an image:
```
--build-arg <name>=<value>
```

Use the ARG instruction in the Dockerfile:
```
ARG <name>[=<default value>]
```

We are going to change the simple node app, and change the dir so it uses a build argument.
The only change we need to make is inside the Dockerfile:
```
vim Dockerfile
```
Dockerfile contents:
```
FROM node
LABEL my-label=v1
ENV NODE_ENV="development"
ENV PORT 3000
ARG SRC_DIR=/var/www
RUN mkdir -p $SRC_DIR
WORKDIR $SRC_DIR
copy app.js .
EXPOSE $PORT
CMD ["node", "app.js"]
```

The default value is set to `/var/www`, but we can change this by using the `--build-arg` during the image creation:
```
$ docker image build -t nodeapp:v3 --build-arg SRC_DIR=/var/node .
Sending build context to Docker daemon  3.584kB
Step 1/10 : FROM node
...
Removing intermediate container e8a942bd7330
 ---> 8a466be090f7
Successfully built 8a466be090f7
Successfully tagged nodeapp:v3
```

Inspect the image to see the working dir being set to /var/node
```
...
"WorkingDir": "/var/node",
...
```
