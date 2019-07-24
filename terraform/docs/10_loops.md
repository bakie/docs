# Loops

## Table of contents
* [foreach](#foreach)
* [for](#for)
* [Additional docs](#additional-docs)

### foreach
The following example will create 2 ingress parts in the aws_security_group example.
One with from_port and to_port set to 22 and another with from_port and to_port set to 80
```
variable "service_ports" {
  default = ["22", "80"]
}

resource "aws_security_group" "example" {
  name = "example"

  dynamic "ingress" {
    for_each = var.service_ports
    content {
      from_port = ingress.value
      to_port   = ingress.value
      protocol  = "tcp"
    }
  }
}
```

A `dynamic` block produces nested blocks instead of a complex typed value. It iterates over a given complex value, 
and generates a nested block for each element of that complex value.

* The label of the dynamic block (`"ingress"` in the example above) specifies what kind of nested block to generate.
* The `for_each` argument provides the complex value to iterate over.
* The `iterator` argument (optional) sets the name of a temporary variable that represents the current element of 
  the complex value. If omitted, the name of the variable defaults to the label of the dynamic block 
  ("ingress" in the example above).
* The `labels` argument (optional) is a list of strings that specifies the block labels, 
  in order, to use for each generated block. You can use the temporary iterator variable in this value.
* The nested `content` block defines the body of each generated block. 
  You can use the temporary iterator variable inside this block.
  
[for each documentation](https://www.terraform.io/docs/configuration/expressions.html#dynamic-blocks)
  
### for
A for expression creates a complex type value by transforming another complex type value. 
Each element in the input value can correspond to either one or zero values in the result, 
and an arbitrary expression can be used to transform each input element into an output element.
```
variable "service_ports" {
  default = [
    {
      from_port = "22",
      to_port   = "22"
    },
    {
      from_port = "80",
      to_port   = "80"
    }
  ]
}

resource "aws_security_group" "example" {
  name = "example"

  dynamic "ingress" {
    for_each = [ for port in var.service_ports: {
      from_port = port.from_port
      to_port   = port.to_port
    }]

    content {
      from_port = ingress.value.from_port
      to_port   = ingress.value.to_port
      protocol  = "tcp"
    }
  }
}

output "ingress_port_mapping" {
  value = {
    for ingress in aws_security_group.example.ingress:
    format("From %d", ingress.from_port) => format("To %d", ingress.to_port)
  }
}
```

[for documentation](https://www.terraform.io/docs/configuration/expressions.html#for-expressions)

### Additional docs
* [expressions](https://www.terraform.io/docs/configuration/expressions.html)