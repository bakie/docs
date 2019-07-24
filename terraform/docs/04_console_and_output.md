# Console and output

## Table of contents
* [console](#console)
* [output](#output)
* [Additional docs](#additional-docs)

### Console
The `console` command provides an interactive console for evaluating [expressions](https://www.terraform.io/docs/configuration/expressions.html)

Start the console
```
$ terraform console
```
this will start the interactive console. Here you can interact with values which are currently saved in state.
For instance:
```
> docker_container.container_id.name

will show the name of the docker_container resource which we named container_id

> docker_container.container_id.ip_address

will show the IP address of the docker_container resource which we named container_id
```

Exit the console by using `ctrl+c`

### Output
Output values are like the return values of a Terraform module.

Declare an output value by using the output block and giving it a name:
```
output [NAME] {
  [OPTION] = [VALUE]
}

Example:
output "ip_address" {
  value = docker_container.container_id.ip_address
}
```
When running `terraform apply` you will see the outputs at the bottom.

Options:

`value (Required)` - takes an expression whose result is to be returned to the user.

`description (Optional)` - Describe the purpose of the value

`sensitive (Optional)` - Mark the output as containing sensitive material

`depends_on` - Explicit Output Dependencies

### Additional docs
* [console](https://www.terraform.io/docs/commands/console.html)
* [output](https://www.terraform.io/docs/configuration/outputs.html)