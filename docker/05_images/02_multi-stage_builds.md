# Multi-Stage builds

## Table of contents
* [Using multi-stage builds](#using-multie-stage-builds)
* [Example](#example)


## Using multie-stage builds
* By default, the stages are not named
* Stages are numbered with integers
* Starting with 0 for the first `FROM` instruction
* Name the stage by adding `as` to the `FROM` instruction
* Reference the stage name in the `COPY` instruction

## Example
Setup your environment. The app.js is just a dummy file. This example is just to show how to use the multi-stage build.
```
$ mkdir /tmp/docker_multi-stage
$ cd /tmp/docker_multi-stage
$ touch app.js
```
Create the Dockerfile
```
$ vim Dockerfile
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
Build the image
```
$ docker image build -t nodeapp:no-multi-stage .
Sending build context to Docker daemon  5.632kB
Step 1/11 : FROM node
...
Removing intermediate container b71997d95abe
 ---> 68d22d1bafd5
Successfully built 68d22d1bafd5
Successfully tagged nodeapp:no-multi-stage
```

Next we are going to use multi-stage builds. Create the Dockerfile-multi-stage
```
$ vim Dockerfile-multi-stage
```
Dockerfile-multi-stage contents:
```
FROM node AS build
ARG SRC_DIR=/home/node_user
RUN mkdir -p $SRC_DIR
WORKDIR $SRC_DIR
copy app.js .

FROM node:alpine
LABEL my-label=v1
ENV NODE_ENV="development"
ENV PORT 3000
ARG SRC_DIR=/home/node_user
copy --from=build $SRC_DIR $SRC_DIR
WORKDIR $SRC_DIR
EXPOSE $PORT
CMD ["node", "app.js"]
```
Build the image
```
$ docker image build -t nodeapp:multi-stage --rm -f Dockerfile-multi-stage .
Sending build context to Docker daemon  5.632kB
Step 1/14 : FROM node AS build
...
Removing intermediate container fe6b0e2f381e
 ---> b1ed6585054e
Successfully built b1ed6585054e
Successfully tagged nodeapp:multi-stag
```

List the docker images
```
$ docker image ls
REPOSITORY          TAG                 IMAGE ID            CREATED              SIZE
nodeapp             multi-stage         b1ed6585054e        59 seconds ago       79.3MB
nodeapp             no-multi-stage      68d22d1bafd5        About a minute ago   908MB
```
As you can see the multi-stage image is significantly smaller than the no-multi-stage image.
Mutli-stage builds are useful if you need a specific base image to build your applications and use a smaller base image 
for running the application. As in the example if you use the node image for building your app (npm install etc.), 
and use the smaller image (node:alpine) to run the application.