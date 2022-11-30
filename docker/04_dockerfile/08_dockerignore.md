# Dockerignore

## Table of contents
* [.dockerignore file](#dockerignore-file)
* [Example](#example)


## .dockerignore file
Before the docker CLI sends the context to the docker daemon, it looks for a file named .dockerignore in the root 
directory of the context. If this file exists, the CLI modifies the context to exclude files and directories that match 
patterns in it. This helps to avoid unnecessarily sending large or sensitive files and directories to the daemon and 
potentially adding them to images using `ADD` or `COPY`.

##Example
Setup your environment
```
$ mkdir /tmp/docker_ignore
$ cd /tmp/docker_ignore
```
Create a directory we are going to copy and place in some empty files
```
$ mkdir -p src/tests src/docs
$ touch src/README.md src/app.js src/tests/testfile1.js
```
Create the dockerignore file
```
$ vim .dockerignore
```
dockerignore contents:
```
# Ignore these files
*/*.md
src/docs/
*/tests/
```
Create the Dockerfile
```
vim Dockerfile
```
Dockerfile contents:
```
FROM nginx:latest
COPY src /var/www
```
Build the image
```
$ docker image build -t docker_ignore:v1 .
Sending build context to Docker daemon  4.096kB
Step 1/2 : FROM nginx:latest
---> e445ab08b2be
Step 2/2 : COPY src /var/www
---> e0dcf0fce2c4
Successfully built e0dcf0fce2c4
Successfully tagged docker_ignore:v1 
```
Run the container
```
$ docker container run -d --name docker_ignore docker_ignore:v1
bcd40cc14b8a015d465bfe2cfad8f471d62fcb139d19565ca99a6afc287dda63
```

List the contents of /var/www
```
$ docker container exec docker_ignore ls -la /var/www
total 12
drwxr-xr-x 2 root root 4096 Jul 26 15:17 .
drwxr-xr-x 1 root root 4096 Jul 26 15:17 ..
-rw-r--r-- 1 root root    0 Jul 26 15:17 app.js
```
Here we can see that the README file, docs dir and tests dir are not copied when creating the image.