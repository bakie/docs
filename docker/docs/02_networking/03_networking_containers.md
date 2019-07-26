# Networking containers

## Table of contents
* [Creating a network and define a Subnet and Gateway](#creating-a-network-and-define-a-subnet-and-gateway)
* [Assigning IPs to a container](#assigning-ips-to-a-container)
* [Networking two containers](#networking-two-containers)

## Creating a network and define a Subnet and Gateway
Create a bridge network with a subnet and gateway
```
$ docker network create --subnet 10.1.0.0/24 --gateway 10.1.0.1 br01
882c9479948029ce5a0705d738ecec9f11c0bbe14ae4cbd0556b056df63d1c20
```
Create a network with an IP range
```
$ docker network create --subnet 10.2.0.0/16 --gateway 10.2.0.1 --ip-range=10.2.1.0/24 \
--driver=bridge --label=host2network br02
20f6201f29a5f5ffb29aac466097c7fa4623ebb05548695954563378e9c4ccf2
```
Create a container using the `br02` network
```
$ docker container run --name network-test01 -it --network br02 ubuntu /bin/bash
[root@3b4804b21a18 /]#
```
Check the IP and gateway. net-tools is required for the commands to be available.
```
[root@3b4804b21a18 /]# apt update
[root@3b4804b21a18 /]# apt install -y net-tools
[root@3b4804b21a18 /]# ifconfig
[root@3b4804b21a18 /]# netstat -rn
```

## Assigning IPs to a container
Create a new container and assign an IP to it
```
$ docker container run -d --name network-test02 --ip 10.2.1.102 --network br02 nginx
cf6978295412c7c8ba85582a5bc823765bafa7a248b08003c5b545c4acf54957
```
Check the IP address
```
$ docker container inspect cf6978295412c7c8ba85582a5bc823765bafa7a248b08003c5b545c4acf54957 | grep IPAddress
"SecondaryIPAddresses": null,
"IPAddress": "",
        "IPAddress": "10.2.1.102",
```

## Networking two containers
Create an internal network
```
$ docker network create -d bridge --internal localnetwork
ee01af191c47860cb9431acf9008fa0b2b632dbceb70b3d75ea95f7ab043b4b6
```
Create a container that is connected to `localnetwork`
```
$ docker container run -d --name nginx01 --network localnetwork nginx
```
Create a second container that is connected to `localnetwork`
```
$ docker container run -d --name nginx02 --network localnetwork nginx
```
Now only nginx01 can talk to nginx02 and vice versa.