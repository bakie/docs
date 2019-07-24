# useradd

create a new user or update default new user information

## Table of contents

* [options](#options)
* [Create a new user](#create-a-new-user)

### options
`-c` - Any text string. It is generally a short description of the login, and is currently used as the field for the user's full name.

`-d` - The new user will be created using HOME_DIR as the value for the user's login directory.

`-e` - The date on which the user account will be disabled.

`-f` - The number of days after a password expires until the account is permanently disabled.

`-g` - The group name or number of the user's initial login group. The group name must exist.

`-G` - A list of supplementary groups which the user is also a member of.

`-m` - Create the user's home directory if it does not exist.

`-M` - Do no create the user's home directory.

`-N` - Do not create a group with the same name as the user, but add the user to the group specified by the -g option

`-p` - The encrypted password, as returned by crypt. 

`-r` - Create a system account.

`-s` - The name of the user's login shell.

`-U` - Create a group with the same name as the user, and add the user to this group.

### Create a new user
```
$ useradd -c "User full name" -m -s "/bin/bash" username
```