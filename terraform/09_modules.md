# Modules

## Table of contents
* [Modules by example](#modules-by-example)
* [Additional docs](#additional-docs)

### Modules by example
We will create a module named ubuntu and use this in the root module.
The ubuntu module will start a container with the latest ubuntu image.
It will use the docker_image and docker_container resource types.
The output will consist of the IP and the name of the deployed container.

First create a Ubuntu directory
```
mkdir ubuntu
cd ubuntu
```

Create the main.tf, variables.tf and outputs.tf file
```
touch main.tf variables.tf outputs.tf
```

ubuntu/main.tf
```
resource "docker_image" "ubuntu_image" {
  name = var.image_name
}

resource "docker_container" "ubuntu_container" {
  name = var.container_name
  image = docker_image.ubuntu_image.latest
}
```

ubuntu/variables.tf
```
variable "image_name" {}
variable "container_name" {}
```

ubuntu/outputs.tf
```
output "ip" {
  value = docker_container.ubuntu_container.ip_address
}

output "container_name" {
  value = docker_container.ubuntu_container.name
}
```

Next up is the root module. Go back one directory if you are still in the ubuntu directory.
```
cd ..
```

Create the main.tf, variables.tf and outputs.tf file
```
touch main.tf variables.tf outputs.tf
```

main.tf. We reference our ubuntu module by using `module "module_name" {}`.
The ubuntu module requires a image_name and container_name.
We need to specify this here so it gets passed on to the ubuntu module.
We use a var here, but we could also hardcode some values here.
```
module "ubuntu" {
  source             = "./ubuntu"
  image_name         = var.image_name
  container_name     = var.container_name
}
```

variables.tf. These are the variables required for the root module.
It are these variables that get passed on to the ubuntu module. 
```
variable "image_name" {
  description = "Image for container."
  default     = "ubuntu:latest"
}

variable "container_name" {
  description = "Name of the container."
  default     = "ubuntu"
}
```

outputs.tf. The main difference here is that we use the module.ubuntu and ask the ip and container_name.
The ip and container_name are defined in the ubuntu/outputs.tf file.
```
output "ip" {
  value = module.ubuntu.ip
}

output "container_name" {
  value = module.ubuntu.container_name
}
```

Run terraform init
```
$ terraform init
```

Create the terraform plan
```
$ terraform plan -out tfplan
```

Apply the terraform plan
```
$ terraform apply tfplan
```

Validate the container is created
```
$ docker ps -a
$ terraform show
```

### Additional docs
* [Modules](https://www.terraform.io/docs/modules/index.html)
* [Modules Configuration](https://www.terraform.io/docs/configuration/modules.html)