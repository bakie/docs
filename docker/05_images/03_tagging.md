# Tagging

## Table of contents
* [Tagging builds](#tagging-builds)
* [Tagging existing images](#tagging-existing-images)


## Tagging builds
Add a name and an optional tag with `-t` or `--tag`, in the `name:tag` format:
```
docker image build -t <name>:<tag>
docker image build --tag <name>:<tag>
```

## Tagging existing images
We can also tag an image off of another image.  We need to supply the source using the name of the image plus the tag. 
Then we supply the target name and tag.
```
$ docker image tag --help

Usage:	docker image tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]

Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
```