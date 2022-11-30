# Maps and Lookups

## Table of contents
* [Maps](#maps)
* [Lookups](#lookups)

### Maps
To explain how the map type in a variable works, we will use an env variable to specify dev or prod.
Based on the env variable we will use a different docker image in dev and prod.
```
variable "env" {
  description = "env: dev or prod"
}

variable "image_name" {
  type        = map(string)
  description = "Image for container."
  default     = {
    dev  = "ubuntu:latest"
    prod = "ubuntu:apline"
  }
}
```
Here you see we will use a different image based on the env variable.
To use this in a resource, we need to use the lookup functionality

### Lookups
In order to reference the map we need a lookup.
```
resource "docker_image" "image_id" {
  name = "${lookup(var.image_name, var.env)}"
}
```

When running `terraform apply` or `terraform plan`, we specify the env variable. For instance:
```
$ terraform apply -var env=dev
```
This will result in using the `ubuntu:latest` docker image as we defined this in the map.
