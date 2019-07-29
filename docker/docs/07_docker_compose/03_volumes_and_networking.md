# Volumes and networking

## Table of contents
* [Using volumes and networking with compose](#using-volumes-and-networking-with-compose)
* [Additional docs](#additional-docs)

## Using volumes and networking with compose
docker-compose file with volumes and networking 
```
version: '3'
services:
  ghost:
    container_name: ghost
    image: ghost:latest
    ports:
      - "80:2368"
    environment:
      - database__client=mysql
      - database__connection__host=mysql
      - database__connection__user=root
      - database__connection__password=P4SSw0rd0!
      - database__connection__database=ghost
    volumes:
      - ghost-volume:/var/lib/ghost
    networks:
      - ghost_network
      - mysql_network
    depends_on:
      - mysql

  mysql:
    container_name: mysql
    image: mysql:5.7
    environment:
      - MYSQL_ROOT_PASSWORD=P4SSw0rd0!
    volumes:
      - mysql-volume:/var/lib/mysql
    networks:
      - mysql_network

volumes:
  ghost-volume:
  mysql-volume:

networks:
  ghost_network:
  mysql_network:
```
What everything does and the available options I recommend reading the 
[documentation](https://docs.docker.com/compose/compose-file).

## Additional docs
* [docker-compose file](https://docs.docker.com/compose/compose-file)