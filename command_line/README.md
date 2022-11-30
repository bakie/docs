# Command line docs

## Table of contents
* commands
    * [cut](cut/README.md)
    * [find](find/README.md)
    * [grep](grep/README.md)
    * [ls](ls/README.md)
    * [man](man/README.md)
    * [netstat](netstat/README.md)
    * [openssl](openssl/README.md)
    * [ps](ps/README.md)
    * [ssh](ssh/README.md)
    * [ssh-keyscan](ssh-keyscan/README.md)
    * [tar](tar/README.md)
    * [uname](uname/README.md)
    * [useradd](useradd/README.md)
    * [usermod](usermod/README.md)
* [Single commands](#single-commands)
* [Variables](#variables)
* [Shell configuration files](#shell-configuration-files)
* [Globbing](#globbing)
* [Quoting](#quoting)
* [Sticky bit](#sticky-bit)
* [Become a user/Run command as user](#become-a-user-or-run-command-as-user)

## Single commands
`echo` - print what follows on to the screen (e.g. echo $PATH)

`env` - list all of the environment variables set for the current shell environment

`export VARIABLE` - exports variable and its value to other shells

`history` - print out commands saved in .bash_history

`!<history_number>` - re-run command from .bash_history

`pwd` - print working directory

`set` - lists out all environment variables in alphabetical order

`shutdown` - can be used to power off, reboot or stop a pending shutdown request.
```
-H --halt      Halt the maching
-P --poweroff  Power-off the machine
-r --reboot    Reboot the machine
-h             Equivalent to --poweroff, override by --halt
-k             Don't halt/power-off/reboot, just send warnings
   --no-wall   Don't send wall message before halt/power-off/reboot
-c             cancel a pending shutdown
```

`su` - substitute user, change to another user account on the system

`whoami` - display your currently logged in user

## Variables
`VARIABLE_NAME=value` - format for declaring a new variable in bash

`HISTCONTROL` - environment variable that modifies Bash's history behaviour

`HISTSIZE` - environment variable that specifies how many lines of history to keep in memory while your bash session is ongoing

`HISTFILESIZE` - environment variable that specifies how many lines of history to keep in the history file

`PATH` - environment variable that contains a list of all of the directories that BASH will look in for application or scripts to run

`PWD` - the current working directory

`OLDPWD` - the previous working directory

## Shell configuration files
`/etc/bashrc` - system-wide functions and aliases

`/etc/profile` - system-wide environment and startup programs, used during a login shell

`/etc/profile.d/` - location of extra environment setup scripts

`~/.bash_profile` - used to set user specific shell environment preferences

`~/.bash_logout` - ran when the user logs out of a login shell, not a terminal

`~/.bashrc` - non-login file that stores user specific functions and aliases

### Bash configuration file order
Login shell
```
During a login shell, these configuration script files are called in this order:
1. /etc/profile
2. then the order branches out, the first file that is found is used, all of the others are ignored even if they exist: 
    * ~/.bash_profile
    * ~/.bash_login
    * ~/.profile
3. ~/.bashrc
4. /etc/bashrc
```
Non-Login shell (e.g. terminal)
```
A non-login shell is only started up when a script is ran, or by opening a terminal application.
During a login shell, these configuration script files are called in this order:
1. ~/.bashrc
2. /etc/bashrc
```

## Globbing
`*` - matches zero or more characters

`?` - matches any single character

`[abc]` - matches any one of the characters in the list, case sensitive

`[^abc]` - matches any one character except those in the list, case sensitive

`[0-9] ` - matches a range of numbers

## Quoting
`""` - double quotes, contains strings and any variables or commands within them get evaluated or acted on

`''` - single quotes, anything within these get treated literally, disables any special character functionality

`\` - backslash, escape character, disables any special character functionality that immediately follows it

## Sticky bit
a permission that ony allows users that create their own files and folders can delete theirs and not another users'

Example the /tmp has the sticky bit set (t character at the end of the permissions)
```
$ ld -ld /tmp
drwxrwxrwt 19 root root 4096 Jul 15 10:38 /tmp 
```
Apply the sticky bit to a folder
```
chmod o+t /path/to/directory
chmod 1777 /path/to/directory
```

## Become a user or run command as user
Use su (substitute user) to become a other user. For instance:
```
$ sudo su - targetuser
$ sudo su - (This will make you the root user)
```
Note: the dash (-) will adopt the environment of the user and you will be places in the home dir of the user. You can also just run `sudo su`.
To become a system user you need to use the -s option with /bin/bash. A system user has /bin/false or /sbin/nologin as its shell. So if you try the above method you will not be able to login.
```
$ sudo su - targetuser -s /bin/bash
```
To run a command as another user, us the -c option
```
$ sudo su - targetuser -c "ls -l"
```
