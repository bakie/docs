# Tainting and updating resources

## Table of contents
* [Tainting and Untaining resources](#tainting-and-untainting-resources)
* [Additional docs](#additional-docs)

### Tainting and untainting resources
`taint` - Manually mark a resource for recreation
```
$ terraform taint [resource_type.resource_name]
```
If you run the command `terraform plan` after tainting a resource, 
you will see a test like `[resource_type.resource_name] is tainted, so must be replaced`

`untaint` - Manually unmark a resources as tainted
```
$ terraform untaint [resource_type.resource_name]
```

### Additional docs
* [taint](https://www.terraform.io/docs/commands/taint.html)
* [untaint](https://www.terraform.io/docs/commands/untaint.html)