# Storage overview

## Table of contents
* [Storage](#storage)
* [Additional docs](#additional-docs)

## Storage
There are 2 types of storage:
* Non-persistent
    * local storage
    * tied to the lifecycle of the container
    * by default all container use local storage
    * locations:
        * Linux: /var/lib/docker/[STORAGE-DRIVER]/
        * Windows: C:\ProgramData\Docker\windowsfilter\
    * storage Drivers:
        * RHEL uses overlay2.
        * Ubuntu uses overlay2 or aufs.
        * SUSE uses btrfs.
        * Windows uses its own.

* persistent
    * volumes (decoupled from containers)
    
<b>Volumes</b>:
* create the volume first, then create your container.
* mounted to a directory in the container
* data is written to the volume
* deleting a container does not delete the volume
* first-class citizens
* uses the local driver
* third party drivers:
    * Block storage
    * File storage
    * Object storage
* locations:
    * Linux: /var/lib/docker/volumes/
    * Windows: C:\ProgramData\Docker\volumes

## Additional docs
* [storage](https://docs.docker.com/storage/)
* [storage drivers](https://docs.docker.com/storage/storagedriver/)