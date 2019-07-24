# Commands

## Table of contents
* [Common commands](#common-commands)
* [Basic example with docker](#basic-example-with-docker)
* [Additional docs](#additional-docs)

### Common commands
`apply` - Builds or changes infrastructure

`console` - Interactive console for Terraform interpolations 

`destroy` - Destroys Terraform-managed infrastructure

`fmt` - Rewrites configuration files to canonical format

`force-unlock` - Manually unlock the terraform state

`get` - Downloads and installs modules for the configuration

`graph` - Creates a visual graph of Terraform resources

`import` - Imports existing infrastructure into Terraform

`init` - Initializes a new or existing Terraform configuration

`output` - Reads an output from a state file

`plan` - Generates and shows an execution plan

`providers` - Prints a tree of the providers used in the configuration

`push` - Uploads this Terraform module to Terraform Enterprise to run

`refresh` - Updates local state file against real resources

`show` - Inspects Terraform state or plan

`state` - Used for advanced state management

`taint` - Manually marks a resource for recreation

`untaint` - Manually unmarks a resource as tainted

`validate` - Validates the Terraform files

`version` - Prints the Terraform version

`workspace` - Workspace management

### Basic example with docker
Ensure you have [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) installed.

First create a terraform script `main.tf` which contains
```
# Download the latest Ghost image
resource "docker_image" "image_id" {
  name = "ghost:latest"
}
```
Initialize terraform
```
$ terraform initialize
```
Validate the terraform file
```
$ terraform validate
```
List providers used in the configuration. These are saved in the folder `.terraform/plugins/linux_amd64`.
[List of providers supported](https://www.terraform.io/docs/providers/index.html)
```
$ terraform providers
```
Generate and show the terraform plan
```
$ terraform plan

Useful flags for plan:
-out=path       Writes a plan file to the given path. This can be used as input to the "apply" command.
-var 'foo=bar'  Set a variable in the terraform configuration. This flag can be set multiple times.
```
Apply the plan
```
$ terraform apply

Useful flags for apply:
-auto-approve   This skips interactive approval of plan before applying.
-var 'foo=bar'  This sets a variable in the terraform configuration. It can be set multiple times.
```
Check that docker image is present
```
$ docker image ls
```
You can also check this with terraform
```
$ terraform show
```
Destroy (remove) the docker image
```
$ terraform destroy

Useful flags for destroy:
-auto-approve   This skips interactive approval of plan before applying.
```

### Additional docs
* [Commands documentation](https://www.terraform.io/docs/commands/index.html)