# usermod

modify a user account

## Table of contents

* [options](#options)

### options
`-a` -  Add the user to the supplementary group(s). Use only with the -G option.

`-c` - The new value of the user's password file comment field.

`-d` - The user's new login directory.

`-e` - The date on which the user account will be disabled.

`-f` - The number of days after a password expires until the account is permanently disabled.

`-g` - The group name or number of the user's new initial login group. The group must exist.

`-G` - A list of supplementary groups which the user is also a member of.

`-l <new_login>` - The name of the user will be changed from LOGIN to NEW_LOGIN.

`-m` - Move the content of the user's home directory to the new location. This option is only valid in combination with the -d option.

`-p` - The encrypted password, as returned by crypt. 

`-s` - The name of the user's login shell.

`-u` - The new numerical value of the user's ID.