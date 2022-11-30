# Input variables

## Table of contents
* [Input variables](#input-variables)
    * [Declare variable](#declaring-variable)
    * [Using variables](#using-variables)
    * [Overwriting variables](#overwriting-variables)
    * [Environment variables](#environment-variables)
* [Additional docs](#additional-docs)

### Input variables
Input variables serve as parameters for a Terraform file. 

#### Declaring variables
A variable block configures a single input variable for a Terraform module. 
Each block declares a single variable.

```
variable [NAME] {
  [OPTION] = "[VALUE]"
}

Example:
variable "container_name" {
  type        = string
  description = "Name of the container"
  default     = "containerName"
}
```
Within the block body (between { }) is configuration for the variable, which accepts the following arguments:

`type (Optional)` - If set, this defines the type of the variable. Valid values are string, list, and map.

`default (Optional)` - This sets a default value for the variable. 
If no default is provided, Terraform will raise an error if a value is not provided by the caller.

`description (Optional)` - A human-friendly description for the variable.

#### Using variables
To use this in your terraform configuration you use the `var.[VARIABLE_NAME]` syntax.

```
variable "image_name" {
  type        = string
  description = "Image for container."
  default     = "ubuntu:latest"
}

resource "docker_image" "image_id" {
  name = var.image_name
}
```

To concatenate 2 variables you can use the format syntax.
```
variable "image_name" {
  type        = string
  description = "Image for container."
  default     = "ubuntu"
}

variable "image_version" {
  type        = string
  description = "Version for the image."
  default     = "latest"
}

resource "docker_image" "image_id" {
  name = format("%s:%s", var.image_name, var.image_version)
}
```

#### Overwriting variables
To overwrite a variables use the `-var` flag when running `terraform apply`
```
$ terraform apply -var image_name=debian:latest
```

#### Environment variables
We can use environment variables instead of going and passing in variables when executing plans or apply.
The variable must start with `TF_VAR_` and then your var name and value
```
$ export TF_VAR_myvar=myVarValue
```

### Additional docs
* [input variables](https://www.terraform.io/docs/configuration/variables.html)
