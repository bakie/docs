# Configuration language

## Table of contents
* [code files](#code-files)
* [Syntax](#syntax)
* [Style conventions](#style-conventions)
* [Additional docs](#additional-docs)

### code files
The Terraform language uses configuration files that are named with the .tf file extension.
There is also a JSON-based variant of the language that is named with the .tf.json file extension.

### Syntax
Example:
```
resource "aws_instance" "example" {
  ami = "abc123"

  network_interface {
    # ...
  }
}
```
The first attribute after resource is called the resource type, the second attribute is the name of the resource.
In the example "aws_instance" is the resource type and we named the resource "example".
The names inside the braces are called arguments. Some are required and others are optional.
This depends on the resource type you are using. 

* Single line comments start with a #
* Multi-line comments are wrapped with `/*` and `*/`
* Values are assigned with the syntax `key = value`
* String are in double-quotes
* String can interpolate other values using syntax wrapped in `${}`, for example `${var.foo}`
* Numbers are assumed to be base 10
* Boolean values are: true, false
* Lists of primitive types can be made with square brackets `[]`, for example `["foo", "bar"]`
* Maps can be made with braces `{}` and colons `:`, for example `{ "foo": "bar", "bar":"baz" }`

### Style conventions
* indent two spaces for each nesting level
* With multiple arguments, align their equals signs

### Additional docs
* [Configuration language](https://www.terraform.io/docs/configuration/index.html)