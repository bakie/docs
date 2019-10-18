# Management

## Table of contents
* [Managing swarm nodes](#managing-swarm-nodes)
* [Examples](#examples)

## Managing swarm nodes
Docker node commands

`demote` - Demotes one or more nodes from manager in the swarm

`inspect` - Displays detailed information on one or more nodes

`ls` - Lists nodes in the swarm

`promote` - Promotes one or more nodes to manager in the swarm

`ps` - Lists tasks running on one or more nodes, defaults to current node

`rm` - Removes one or more nodes from the swarm

`update` - Updates a node 

Docker swarm commands

`ca` - Displays and rotate the root CA

`init` - Initializes a swarm

`join` - Joins a swarm as a node and/or manager

`join-token` - Manages join tokens

`leave` - Leaves the swarm

`unlock` - Unlocks swarm

`unlock-key` - Manages the unlock key

`update` - Updates the swarm

## Examples
The commands need to be run on a manager node.
List all the nodes
```
$ docker node ls
ID                            HOSTNAME                  STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
x0905jjc296kans6wzb5l5lue *   bakie1c.mylabserver.com   Ready               Active              Leader              19.03.1
mqsqz67cs3c7a23wo7z0vgsd0     bakie2c.mylabserver.com   Ready               Active                                  19.03.1
```
Inspect a node. You can use the ID or the HOSTNAME
```
$ docker node inspect mqsqz67cs3c7a23wo7z0vgsd0
[
    {
        "ID": "mqsqz67cs3c7a23wo7z0vgsd0",
        "Version": {
            "Index": 15
        },
        "CreatedAt": "2019-07-30T08:05:35.687699184Z",
        "UpdatedAt": "2019-07-30T08:05:35.790838064Z",
        "Spec": {
            "Labels": {},
            "Role": "worker",
            "Availability": "active"
        },
        "Description": {
            "Hostname": "bakie2c.mylabserver.com",
            "Platform": {
                "Architecture": "x86_64",
                "OS": "linux"
            },
            "Resources": {
                "NanoCPUs": 2000000000,
                "MemoryBytes": 1887510528
            },
            "Engine": {
                "EngineVersion": "19.03.1",
                "Plugins": [
                    {
                        "Type": "Log",
                        "Name": "awslogs"
                    },
                    ...
                    {
                        "Type": "Volume",
                        "Name": "local"
                    }
                ]
            },
            "TLSInfo": {
                "TrustRoot": "-----BEGIN CERTIFICATE-----\nMIIBajCCARCgAwIBAgIUXuyv7dhxO9Heb1rHtsz+wFHt2yYwCgYIKoZIzj0EAwIw\nEzERMA8GA1UEAxMIc3dhcm0tY2EwHhcNMTkwNzMwMDgwMDAwWhcNMzkwNzI1MDgw\nMDAwWjATMREwDwYDVQQDEwhzd2FybS1jYTBZMBMGByqGSM49AgEGCCqGSM49AwEH\nA0IABNYgIJLgqTeoO+WFY9H7ZbNU2twgKsCB/vMWBjaVHCF+2IcTk+/WWBRWUkrb\nIBUNLtSqpgKGYD16kBKF2uFRRVqjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB\nAf8EBTADAQH/MB0GA1UdDgQWBBQKvCD2wsRiawT9cdywNbny0M9LuTAKBggqhkjO\nPQQDAgNIADBFAiA90g0r/6ssxAa0jCj99I4fctfeLld3Q9qxKpEW7STVvQIhAMC7\n23oXRMBO3KT4Xi0qtiDdxrAlfCDTmO+zHtm8syJP\n-----END CERTIFICATE-----\n",
                "CertIssuerSubject": "MBMxETAPBgNVBAMTCHN3YXJtLWNh",
                "CertIssuerPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE1iAgkuCpN6g75YVj0ftls1Ta3CAqwIH+8xYGNpUcIX7YhxOT79ZYFFZSStsgFQ0u1KqmAoZgPXqQEoXa4VFFWg=="
            }
        },
        "Status": {
            "State": "ready",
            "Addr": "172.31.103.202"
        }
    }
]
```
Promoting a worker to a manager
```
$ docker node promote bakie2c.mylabserver.com
Node bakie2c.mylabserver.com promoted to a manager in the swarm.
```
List the nodes again, and we can see the status for the promoted node changed to Reachable.
Promoting a node to a manager can be useful if you need to do maintenance on the Leader manager.
```
$ docker node ls
ID                            HOSTNAME                  STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
x0905jjc296kans6wzb5l5lue     bakie1c.mylabserver.com   Ready               Active              Leader              19.03.1
mqsqz67cs3c7a23wo7z0vgsd0 *   bakie2c.mylabserver.com   Ready               Active              Reachable           19.03.1
```
Demoting a manager to a worker:
```
$ docker node demote bakie2c.mylabserver.com
Manager bakie2c.mylabserver.com demoted in the swarm.
```
Removing a node form the swarm (node must be demoted first). We use the -f flag because the node is still running.
```
$ docker node rm -f bakie2c.mylabserver.com
bakie2c.mylabserver.com
```
List the nodes
```
$ docker node ls
ID                            HOSTNAME                  STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
x0905jjc296kans6wzb5l5lue *   bakie1c.mylabserver.com   Ready               Active              Leader              19.03.1
```
Make a node leave the swarm. By removing the node with the `docker node rm` command, we have removed the node from the
swarm, but the node still thinks it is part of the node. By removing the node from swarm we have to actually leave the 
swarm.
```
$ docker swarm leave
Node left the swarm.
```
Join the node back into the swarm first get the join token from the manager
```
$ docker swarm join-token worker
To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-2jahezmzbju86c0vb2uxslsyk1rsl5riuosdgs4619fgb5ve51-1xuyq3mpk7otco1xts7n5clgu 172.31.110.160:2377
```
Join the swarm
```
$ docker swarm join --token SWMTKN-1-2jahezmzbju86c0vb2uxslsyk1rsl5riuosdgs4619fgb5ve51-1xuyq3mpk7otco1xts7n5clgu 172.31.110.160:2377
This node joined a swarm as a worker.
```