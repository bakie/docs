# Events

## Table of contents
* [events command](#events-command)
* [Additional docs](#additional-docs)

## events command
Docker Events is a great way of getting real-time event data about containers. The command `docker system events` is 
going to sit and wait for events to come in. 
```
$ docker system events --help

Usage:	docker system events [OPTIONS]

Get real time events from the server

Options:
  -f, --filter filter   Filter output based on conditions provided
      --format string   Format the output using the given Go template
      --since string    Show all events created since timestamp
      --until string    Stream events until this timestamp
```
Example:
```
$ docker container run -itd --name docker_events centos /bin/bash
a782ab8a21cc4705bb41f950261e9bbfc51e294887fd28bec536bc39e00fcc09
$ docker system events --since='10s'
2019-07-28T14:10:23.488724031+02:00 container create a782ab8a21cc4705bb41f950261e9bbfc51e294887fd28bec536bc39e00fcc09 (image=centos, name=docker_events, org.label-schema.build-date=20190305, org.label-schema.license=GPLv2, org.label-schema.name=CentOS Base Image, org.label-schema.schema-version=1.0, org.label-schema.vendor=CentOS)
2019-07-28T14:10:23.556921017+02:00 network connect c89939a05aa7942efa8272e24c7edea979902fa35d1e2f20aebc1abc46a279d7 (container=a782ab8a21cc4705bb41f950261e9bbfc51e294887fd28bec536bc39e00fcc09, name=bridge, type=bridge)
2019-07-28T14:10:24.238728617+02:00 container start a782ab8a21cc4705bb41f950261e9bbfc51e294887fd28bec536bc39e00fcc09 (image=centos, name=docker_events, org.label-schema.build-date=20190305, org.label-schema.license=GPLv2, org.label-schema.name=CentOS Base Image, org.label-schema.schema-version=1.0, org.label-schema.vendor=CentOS)
```
In the output we can see the object type as well as the event that is being triggered. In the example we have object 
type `container` and as event `create`. We can also filter on these types using the `--filter` flag.
```
$ docker system events --filter type=container --since='2m'
2019-07-28T14:10:23.488724031+02:00 container create a782ab8a21cc4705bb41f950261e9bbfc51e294887fd28bec536bc39e00fcc09 (image=centos, name=docker_events, org.label-schema.build-date=20190305, org.label-schema.license=GPLv2, org.label-schema.name=CentOS Base Image, org.label-schema.schema-version=1.0, org.label-schema.vendor=CentOS)
2019-07-28T14:10:24.238728617+02:00 container start a782ab8a21cc4705bb41f950261e9bbfc51e294887fd28bec536bc39e00fcc09 (image=centos, name=docker_events, org.label-schema.build-date=20190305, org.label-schema.license=GPLv2, org.label-schema.name=CentOS Base Image, org.label-schema.schema-version=1.0, org.label-schema.vendor=CentOS)
```
We have filtered on `type=container` and we can see that the network type is being filtered out.

## Additional docs
* [docker events](https://docs.docker.com/engine/reference/commandline/events/)
