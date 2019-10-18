# Volumes

## Table of contents
* [Using volumes in swarm mode](#using-volumes-in-swarm-mode)
* [Additional docs](#additional-docs)

## Using volumes in swarm mode
The local driver only creates a volume on the node that a command is executed on.
This requires using a third party driver that is specific to the environment.

Install plugin:
```
$ docker plugin install <PLUGIN> <OPTIONS>
```
List plugins:
```
$ docker plugin ls
```
Disable a plugin:
```
docker plugin disable [ID]
```
Remove a plugin:
```
docker plugin rm [ID]
```

A list of volume plugins:
* Hedvig
* Pure Storage
* HPE Nimble Storage
* Nutanix DVP
* Blockbridge
* NexentaStor
* StorageOS
* Rex-Ray

## Additional docs
* [volumes plugins](https://hub.docker.com/search/?q=volume%20plugins&type=plugin&category=volume)
* [REX-Ray](https://rexray.io/)
* [REX-Ray docker plugins](https://rexray.readthedocs.io/en/stable/user-guide/schedulers/docker/plug-ins/)