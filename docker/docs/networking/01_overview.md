# Networking overview

## Table of contents
* [Overview](#overview)
* [Additional docs](#additional-docs)

## Overview
There are 3 major components that consist of docker networking
* Container Network Model (CNM)
* libnetwork implements CNM
* Drivers that libnetwork uses. Driver extend the model by network topologies

Network drivers:
* `bridge` - Bridge networks are usually used when your applications run in standalone containers that need to 
communicate
* `host` - For standalone containers, remove network isolation between the container and the Docker host, 
and use the host’s networking directly. Only available for swarm services.
* `overlay` - Overlay networks connect multiple Docker daemons together and enable swarm services to communicate with 
each other.
* `macvlan` - Macvlan networks allow you to assign a MAC address to a container, making it appear as a physical device 
on your network.
* `none` - For this container, disable all networking.
* `Network plugins` - You can install and use third-party network plugins with Docker.

Container Network Model defines three building blocks
* Sandboxes
* Endpoints
* Networks

## Additional docs
* [network](https://docs.docker.com/network/)