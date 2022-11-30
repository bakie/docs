# Services

## Table of contents
* [Working with services](#working-with-services)
* [Examples](#examples)
* [Additional docs](#additional-docs)

## Working with services
Docker service commands:

`create` - Creates a new service

`inspect` - Displays detailed information on one or more services

`logs` - Fetches the logs of a service or task

`ls` - Lists services

`ps` - Lists the tasks of one or more services

`rm` - Removes one or more services

`rollback` - Reverts changes to a service's configuration

`scale` - Scales one or multiple replicated services

`update` - Updates a service

## Examples
We create the service with 1 replica, depending on the number of nodes you can scale this up. 
The swarm manager ensure that the number of replicas is met. The manager is going to schedule out the replica tasks and
those tasks will be scheduled onto an available node (this can also be the manager itself). The manager then recognizes
the task is in a running state. If for some reason the container fails a health check or is terminated, the task is also 
terminated. If the minimum number of replicas is not met, then a new task will be scheduled and created.
Create a service.
```
$ docker service create -d --name nginx_service -p 8080:80 --replicas 1 nginx:latest
jxbkizctdsqlnufqx3wqym7l1
```
List the services
```
$ docker service ls
ID                  NAME                MODE                REPLICAS            IMAGE               PORTS
jxbkizctdsql        nginx_service       replicated          1/1                 nginx:latest        *:8080->80/tcp
```
Inspect the service
```
$ docker service inspect nginx_service
[
    {
        "ID": "jxbkizctdsqlnufqx3wqym7l1",
        "Version": {
            "Index": 37
        },
        "CreatedAt": "2019-07-30T11:23:49.239689043Z",
        "UpdatedAt": "2019-07-30T11:23:49.241895483Z",
        "Spec": {
...
            "VirtualIPs": [
                {
                    "NetworkID": "ioxhf10hxosd2c4pg9bdfunll",
                    "Addr": "10.255.0.5/16"
                }
            ]
        }
    }
]
```
View the running tasks for nginx_service
```
$ docker service ps nginx_service
ID                  NAME                IMAGE               NODE                      DESIRED STATE       CURRENT STATE                ERROR               PORTS
tjeoexcihzxp        nginx_service.1     nginx:latest        bakie1c.mylabserver.com   Running             Running about a minute ago
```
We have started the nginx_service with 1 replica. If we run a `docker container ls` on both nodes we can see that nginx
is only running on one node. If we scale the service up to 2 it will run on both nodes. 
Scale nginx_service to 2 replicas
```
$ docker service scale nginx_service=2
nginx_service scaled to 2
overall progress: 2 out of 2 tasks 
1/2: running   [==================================================>] 
2/2: running   [==================================================>] 
verify: Service converge
```
View the running tasks for nginx_service
```
$ docker service ps nginx_service
ID                  NAME                  IMAGE               NODE                      DESIRED STATE       CURRENT STATE                ERROR               PORTS
dckun9pxlt42        nginx_service.1       nginx:latest        bakie1c.mylabserver.com   Running             Running about a minute ago                                               
pcncg0pwiit9        nginx_service.2       nginx:latest        bakie2c.mylabserver.com   Running             Running 31 seconds ago 
```

## Additional docs
* [service](https://docs.docker.com/engine/reference/commandline/service/)
