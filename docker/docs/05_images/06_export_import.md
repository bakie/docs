# Export Import

## Table of contents
* [Exporting images](#exporting-images)
* [Importing images](#importing-images)

## Exporting images
To save an image to a tar file use the `docker image save` command
```
$ docker image save --help

Usage:	docker image save [OPTIONS] IMAGE [IMAGE...]

Save one or more images to a tar archive (streamed to STDOUT by default)

Options:
  -o, --output string   Write to a file, instead of STDOUT
```
Example:
```
$ docker image save node:latest -o node.latest.tar.gz
```

## Importing images
To load an image from a tar file use the `docker image load` command
```
$ docker image load --help

Usage:	docker image load [OPTIONS]

Load an image from a tar archive or STDIN

Options:
  -i, --input string   Read from tar archive file, instead of STDIN
  -q, --quiet          Suppress the load output
[13:02:58] ikke@diablo:~/playground/docs [mast
```
Example:
```
$ docker image load -i node.latest.tar.gz
Loaded image: node:latest
```