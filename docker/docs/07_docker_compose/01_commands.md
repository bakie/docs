# Commands

## Table of contents
* [docker-compose commands](#docker-compose-commands)
* [example](#example)

## docker-compose commands
`build:` Build or rebuild services

`bundle:` Generate a Docker bundle from the Compose file

`config:` Validate and view the Compose file

`create:` Create services

`down:` Stop and remove containers, networks, images, and volumes

`events:` Receive real time events from containers

`exec:` Execute a command in a running container

`help:` Get help on a command

`images:` List images

`kill:` Kill containers

`logs:` View output from containers

`pause:` Pause services

`port:` Print the public port for a port binding

`ps:` List containers

`pull:` Pull service images

`push:` Push service images

`restart:` Restart services

`rm:` Remove stopped containers

`run:` Run a one-off command

`scale:` Set number of containers for a service

`start:` Start services

`stop:` Stop services

`top:` Display the running processes

`unpause:` Unpause services

`up:` Create and start containers

`version:` Show the Docker-Compose version information

## Example
Setup your environment
```
$ mkdir /tmp/docker-compose
$ cd /tmp/docker-compose
```
Create a docker-compose file
```
$ vim docker-compose.yml
```
docker-compose contents
```
version: '3'
services:
  web:
    image: nginx
    ports:
    - "8080:80"
    volumes:
    - nginx_html:/usr/share/nginx/html/
    links:
    - redis
  redis:
    image: redis
volumes:
  nginx_html: {}
```
Create a compose service
```
$ docker-compose up -d
Creating network "dockercompose_default" with the default driver
Creating dockercompose_redis_1 ... 
Creating dockercompose_redis_1 ... done
Creating dockercompose_web_1 ... 
Creating dockercompose_web_1 ... done
```
List containers created by compose
```
$ docker-compose ps
        Name                       Command               State          Ports        
-------------------------------------------------------------------------------------
dockercompose_redis_1   docker-entrypoint.sh redis ...   Up      6379/tcp            
dockercompose_web_1     nginx -g daemon off;             Up      0.0.0.0:8080->80/tcp
```
Stopping a compose service
```
$ docker-compose stop
Stopping dockercompose_web_1   ... done
Stopping dockercompose_redis_1 ... done
```
Starting a compose service
```
$ docker-compose start
Starting redis ... done
Starting web   ... done
```
Restarting a compose service
```
$ docker-compose restart
Restarting dockercompose_web_1   ... done
Restarting dockercompose_redis_1 ... done
```
Delete a compose service
```
$ docker-compose down
Stopping dockercompose_web_1   ... done
Stopping dockercompose_redis_1 ... done
Removing dockercompose_web_1   ... done
Removing dockercompose_redis_1 ... done
Removing network dockercompose_default
```