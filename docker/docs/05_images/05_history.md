# History

## Table of contents
* [Image history](#image-history)

## Image history
We can get more information from images by looking at the history.
```
$ docker image history --help

Usage:	docker image history [OPTIONS] IMAGE

Show the history of an image

Options:
      --format string   Pretty-print images using a Go template
  -H, --human           Print sizes and dates in human readable format (default true)
      --no-trunc        Don't truncate output
  -q, --quiet           Only show numeric IDs
```

Example of the node:latest history. Here we can see all the commands that have run which are defined in the Dockerfile.
```
$ docker image history node:latest
IMAGE               CREATED             CREATED BY                                      SIZE                COMMENT
16b062cafbd0        2 days ago          /bin/sh -c #(nop)  CMD ["node"]                 0B                  
<missing>           2 days ago          /bin/sh -c #(nop)  ENTRYPOINT ["docker-entry…   0B                  
<missing>           2 days ago          /bin/sh -c #(nop) COPY file:238737301d473041…   116B                
<missing>           2 days ago          /bin/sh -c set -ex   && for key in     6A010…   5.47MB              
<missing>           2 days ago          /bin/sh -c #(nop)  ENV YARN_VERSION=1.17.3      0B                  
<missing>           2 days ago          /bin/sh -c ARCH= && dpkgArch="$(dpkg --print…   66.3MB              
<missing>           2 days ago          /bin/sh -c #(nop)  ENV NODE_VERSION=12.7.0      0B                  
<missing>           2 weeks ago         /bin/sh -c groupadd --gid 1000 node   && use…   333kB               
<missing>           2 weeks ago         /bin/sh -c set -ex;  apt-get update;  apt-ge…   562MB               
<missing>           2 weeks ago         /bin/sh -c apt-get update && apt-get install…   142MB               
<missing>           2 weeks ago         /bin/sh -c set -ex;  if ! command -v gpg > /…   7.81MB              
<missing>           2 weeks ago         /bin/sh -c apt-get update && apt-get install…   23.2MB              
<missing>           2 weeks ago         /bin/sh -c #(nop)  CMD ["bash"]                 0B                  
<missing>           2 weeks ago         /bin/sh -c #(nop) ADD file:f615b611820773fd6…   101MB
```