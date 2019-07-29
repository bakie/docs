# Creating a compose file

## Table of contents
* [docker-compose file](#docker-compose-file)
* [Additional docs](#additional-docs)

## docker-compose file
A docker-compose file has four types of top-level keys
* `version` - defines the compose file format. this is mandatory
* `services` -  contains configuration that is applied to each container started for that service
* `networks` - specifies the networks that need to be created
* `volumes` - allows you to create named volumes that can be reused across multiple services

Simple docker-compose file 
```
version: '3'
services:
  my-app:
    build:
      context: .
      args:
        - VERSION=v2.0
    ports:
      - "8080:3000"
    environment:
      - NODE_ENV=production
```
What everything does and the available options I recommend reading the 
[documentation](https://docs.docker.com/compose/compose-file).

## Additional docs
* [docker-compose file](https://docs.docker.com/compose/compose-file)