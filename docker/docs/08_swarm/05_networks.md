# Networks

## Table of contents
* [Using networks in swarm mode](#using-networks-in-swarm-mode)
* [Examples](#examples)
* [Additional docs](#additional-docs)

## Using networks in swarm mode
Swarm uses the overlay type network. The overlay network driver creates a distributed network across multiple docker
nodes. It sits on top of the host specific network, and this allows containers to go and communicate securely. 
Docker handles the routing of packets to the correct docker host and to the correct container. This allows us to use
the public ip of our swarm manager to go and access the service. And then it's gonna go and route that traffic to the 
correct docker host and to the correct container.

When we initialize the swarm as well as having a docker host join the swarm, it's gonna go and create an overlay 
network called ingress. This network handles control as well as the data traffic related to Swarm Services.
Also created is a bridge network called docker_gwbridge. This connects individual Docker daemons
to other daemons participating in the Swarm

## Examples
Create a overlay network
```
$ docker network create -d overlay my_overlay
66gv21d1zlx8bib3uks390y96
```
Create an encrypted overlay network. The `--opt encrypted` ensures that data being sent over the network will be 
encrypted.
```
$ docker network create -d overlay --opt encrypted encrypted_overlay
4hf1mtz7qruy4m1ba4bcmn5di
```
Inspect encrypted_overlay. Notice the `encrypted` option in the `Options` sections.
```
$ docker network inspect encrypted_overlay
[
    {
        "Name": "encrypted_overlay",
        "Id": "4hf1mtz7qruy4m1ba4bcmn5di",
        "Created": "2019-07-31T18:21:41.864217997Z",
        "Scope": "swarm",
        "Driver": "overlay",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "10.0.1.0/24",
                    "Gateway": "10.0.1.1"
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
        "Containers": null,
        "Options": {
            "com.docker.network.driver.overlay.vxlanid_list": "4098",
            "encrypted": ""
        },
        "Labels": null
    }
]
```
Inspect my_overlay
```
$ docker network inspect my_overlay
[
    {
        "Name": "my_overlay",
        "Id": "66gv21d1zlx8bib3uks390y96",
        "Created": "2019-07-31T18:21:32.472408349Z",
        "Scope": "swarm",
        "Driver": "overlay",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "10.0.0.0/24",
                    "Gateway": "10.0.0.1"
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
        "Containers": null,
        "Options": {
            "com.docker.network.driver.overlay.vxlanid_list": "4097"
        },
        "Labels": null
    }
]
```
Create a service using my_overlay
```
$ docker service create -d --name nginx_overlay  --network my_overlay -p 8081:80 --replicas 2 nginx:latest
9107imoje9w826e3g0ncvl6d2
```
Adding the encrypted_overlay network to nginx_overlay
```
$ docker service update --network-add encrypted_overlay nginx_overlay
nginx_overlay
overall progress: 2 out of 2 tasks 
1/2: running   [==================================================>] 
2/2: running   [==================================================>] 
verify: Service converged
```
Inspect nginx_overlay. We can see it is attached to 3 networks. The default ingress, the my_overlay and the 
encrypted_overlay network. You can find the networks using the `docker network ls --no-trunc | grep <NetworkID>`
```
$ docker service inspect nginx_overlay
...
            "VirtualIPs": [
                {
                    "NetworkID": "ioxhf10hxosd2c4pg9bdfunll",
                    "Addr": "10.255.0.7/16"
                },
                {
                    "NetworkID": "66gv21d1zlx8bib3uks390y96",
                    "Addr": "10.0.0.2/24"
                },
                {
                    "NetworkID": "4hf1mtz7qruy4m1ba4bcmn5di",
                    "Addr": "10.0.1.2/24"
                }
            ]
...
```
Removing the my_overlay network from nginx_overlay
```
$ docker service update --network-rm my_overlay nginx_overlay
nginx_overlay
overall progress: 2 out of 2 tasks 
1/2: running   [==================================================>] 
2/2: running   [==================================================>] 
verify: Service converged
```
Inspect nginx_overlay. We now only see 2 networks, the default ingress and the my_overlay network.
```
$ docker service inspect nginx_overlay
...
            "VirtualIPs": [
                {
                    "NetworkID": "ioxhf10hxosd2c4pg9bdfunll",
                    "Addr": "10.255.0.7/16"
                },
                {
                    "NetworkID": "4hf1mtz7qruy4m1ba4bcmn5di",
                    "Addr": "10.0.1.2/24"
                }
            ]
...
```

## Additional docs
* [overlay network](https://docs.docker.com/network/overlay/)