# Stacks

## Table of contents
* [Using stacks in swarm mode](#using-stack-in-swarm-mode)

## Using stack in swarm mode
Stacks let you deploy out a complete application to your swarm environment. And we do this using a compose file.

Docker stack commands:

`deploy` - Deploys a new stack or update an existing stack

`ls` - Lists stacks

`ps` - Lists the tasks in the stack

`rm` - Removes one or more stacks

`services` - Lists the services in the stack

vim docker-compose.yml file
```
version: '3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     networks:
       mysql_internal:
     environment:
       MYSQL_ROOT_PASSWORD: P4ssw0rd0!
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: P4ssw0rd0!

   blog:
     depends_on:
       - db
     image: wordpress:latest
     networks:
       mysql_internal:
       wordpress_public:
     ports:
       - "80:80"
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: P4ssw0rd0!

volumes:
    db_data:
networks:
  mysql_internal:
    internal: true
  wordpress_public:
```
Deploy the stack:
```
$ docker stack deploy --compose-file docker-compose.yml application
Creating network application_mysql_internal
Creating network application_wordpress_public
Creating service application_db
Creating service application_blog
```
List stacks:
```
$ docker stack ls
NAME                SERVICES            ORCHESTRATOR
application         2                   Swarm
```
List services:
```
$ docker service ls
ID                  NAME                MODE                REPLICAS            IMAGE               PORTS
q1z5clzlw9jf        application_blog    replicated          1/1                 wordpress:latest    *:80->80/tcp
j5q09js76dg3        application_db      replicated          1/1                 mysql:5.7
```
