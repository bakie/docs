# Terraform docs

* [terraform](https://www.terraform.io/)
* [downloads](https://www.terraform.io/downloads.html)
* [documentation](https://www.terraform.io/docs/index.html)

## Table of contents
* [Commands](01_commands.md)
* [Configuration language](02_configuration_language.md)
* [Tainting/Untainting](03_tainting_and_updating_resources.md)
* [Console and output](04_console_and_output.md)
* [Input variables](05_input_variables.md)
* [Maps and Lookups](06_maps_and_lookups.md)
* [Workspaces](07_workspaces.md)
* [Providers and provisioners](08_providers_and_provisioners.md)
* [Modules](09_modules.md)
* [Loops](10_loops.md)
* [Functions](11_functions.md)

### Shell Tab-completion
If you use either bash or zsh as your command shell, Terraform can provide tab-completion support for all command names and some command arguments.

To add the necessary commands to your shell profile, run the following command:
```
terraform -install-autocomplete
```
After installation, it is necessary to restart your shell or to re-read its profile script before completion will be activated.

To uninstall the completion hook, assuming that it has not been modified manually in the shell profile, run the following command:
```
terraform -uninstall-autocomplete
```