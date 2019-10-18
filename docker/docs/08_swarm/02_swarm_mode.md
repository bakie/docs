# Swarm mode

## Table of contents
* [Running docker in swarm mode](#running-docker-in-swarm-mode)

## Running docker in swarm mode
For this we need 2 servers. One being the manager and one being the node
Initialize the manager. The ip address is the private IP of the server:
```
$ docker swarm init --advertise-addr 172.31.110.160
Swarm initialized: current node (x0905jjc296kans6wzb5l5lue) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-2jahezmzbju86c0vb2uxslsyk1rsl5riuosdgs4619fgb5ve51-1xuyq3mpk7otco1xts7n5clgu 172.31.110.160:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
```
Add the worker to the cluster:
```
$ docker swarm join --token SWMTKN-1-2jahezmzbju86c0vb2uxslsyk1rsl5riuosdgs4619fgb5ve51-1xuyq3mpk7otco1xts7n5clgu 172.31.110.160:2377
This node joined a swarm as a worker.
```
List the nodes on the manager:
```
$ docker node ls
ID                            HOSTNAME                  STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
x0905jjc296kans6wzb5l5lue *   bakie1c.mylabserver.com   Ready               Active              Leader              19.03.1
mqsqz67cs3c7a23wo7z0vgsd0     bakie2c.mylabserver.com   Ready               Active                                  19.03.1
```
