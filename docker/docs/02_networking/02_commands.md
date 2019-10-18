# Networking commands

## Table of contents
* [commands](#commands)
* [Add a container to a network](#add-a-container-to-a-network)
* [Remove a container from a network](#remove-a-container-from-a-network)

## Commands
```
$ docker network --help

Usage:	docker network COMMAND

Manage networks

Commands:
  connect     Connect a container to a network
  create      Create a network
  disconnect  Disconnect a container from a network
  inspect     Display detailed information on one or more networks
  ls          List networks
  prune       Remove all unused networks
  rm          Remove one or more networks
```

## Add a container to a network
First create a container with no network
```
$ docker container run -d --name container-name-123 -p 8080:80 nginx
92e1f00f0734c20bfc48f26099b316cffb696e8bbdeba1c5e79faab29b05a4d5
```
Create a network
```
$ docker network create br01
3ee091b0f47d2faa325289faabc719e90a4ab1c93a2d6a3a214ed5dccc838f92
```
Add the container to the bridge network
```
$ docker network connect br01 container-name-123
```
Inspect the network to see the containers connected to it
```
$ docker network inspect br01

[
    {
        "Name": "br01",
        "Id": "3ee091b0f47d2faa325289faabc719e90a4ab1c93a2d6a3a214ed5dccc838f92",
        "Created": "2019-07-24T14:04:59.952540168+02:00",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.18.0.0/16",
                    "Gateway": "172.18.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "92e1f00f0734c20bfc48f26099b316cffb696e8bbdeba1c5e79faab29b05a4d5": {
                "Name": "container-name-123",
                "EndpointID": "f41073ef022dfd278e1315dc82b0c737b3cadd79816cbefc020f3e6851bef0af",
                "MacAddress": "02:42:ac:12:00:02",
                "IPv4Address": "172.18.0.2/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
]
```
You can also inspect the container to see the Networks
```
$ docker container inspect 92e1f00f0734
...
"Networks": {
    "br01": {
        "IPAMConfig": {},
        "Links": null,
        "Aliases": [
            "92e1f00f0734"
        ],
        "NetworkID": "3ee091b0f47d2faa325289faabc719e90a4ab1c93a2d6a3a214ed5dccc838f92",
        "EndpointID": "f41073ef022dfd278e1315dc82b0c737b3cadd79816cbefc020f3e6851bef0af",
        "Gateway": "172.18.0.1",
        "IPAddress": "172.18.0.2",
        "IPPrefixLen": 16,
        "IPv6Gateway": "",
        "GlobalIPv6Address": "",
        "GlobalIPv6PrefixLen": 0,
        "MacAddress": "02:42:ac:12:00:02",
        "DriverOpts": {}
    },
    "bridge": {
        "IPAMConfig": null,
        "Links": null,
        "Aliases": null,
        "NetworkID": "425c744fabfd4cfcd71b2669d398ecf6315ea4abb9890d47c719aded6bab9d1d",
        "EndpointID": "9a6e8f2f7629f65b92cb70ce8f22612ab9419a70ba850e5dade7a86a59fc20c2",
        "Gateway": "172.17.0.1",
        "IPAddress": "172.17.0.2",
        "IPPrefixLen": 16,
        "IPv6Gateway": "",
        "GlobalIPv6Address": "",
        "GlobalIPv6PrefixLen": 0,
        "MacAddress": "02:42:ac:11:00:02",
        "DriverOpts": null
    }
...
```
Note: The container is now in 2 networks. The newly created `br01` and `bridge`. By default if you start a container
and you don't specify a network, it gets added, by default, to the `bridge` network.
To see the default created network, run `docker network ls`.

## Remove a container from a network
```
$ docker network disconnect br01 container-name-123
```