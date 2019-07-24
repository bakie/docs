# Workspaces

## Table of contents
* [Workspaces](#workspaces)
    * [Create workspace](#create-workspace)
    * [List all workspaces](#list-all-workspaces)
    * [Select workspace](#select-workspace)
    * [Show workspace](#show-workspace)
    * [Delete workspace](#delete-workspace)
* [Additional docs](#additional-docs)

### Workspaces
Each Terraform configuration has an associated backend that defines how operations are executed 
and where persistent data such as the Terraform state are stored.

The persistent data stored in the backend belongs to a workspace. 
Initially the backend has only one workspace, called "default", 
and thus there is only one Terraform state associated with that configuration.

By using workspaces, we can deploy multiple environments simultaneously without the state files colliding.

#### Create workspace
The following will create a new workspace named example
```
$ terraform workspace new example
Created and switched to workspace "example"!
```

You can also create a new workspace from a pre-existing local state file
```
$ terraform workspace new -state=old.terraform.tfstate example
Created and switched to workspace "example"!
```

#### List all workspaces
This command will list all existing workspaces
```
$ terraform workspace list
  default
* example
```

#### Select workspace
This command will select another workspace.
```
$ terraform workspace select default
Switched to workspace "default".
```

#### Show workspace
This command will display the current workspace.
```
$ terraform workspace show
default
```

#### Delete workspace
This command will delete the specified workspace.
```
$ terraform workspace delete example
Deleted workspace "example"!

Useful flags for delete:
-force   Delete the workspace even if its state is not empty. Defaults to false.
```

### Additional docs
* [Workspaces](https://www.terraform.io/docs/state/workspaces.html)
* [Workspace commands](https://www.terraform.io/docs/commands/workspace/index.html)