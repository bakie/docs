# man

an interface to the on-line reference manuals.

Man pages are divided into sections. Most of the time you will deal with Section 1. 

```
Section Number      Description
1.                  Executable programs and shell commands
2.                  System calls provided by the kernel
3.                  Library calls provided by the program libraries
4.                  Device file (usually stored in /dev)
5.                  File formats
6.                  Games
7.                  Miscellaneous (macro packages, conventions and so on)
8.                  System administration commands
9.                  Kernel routines
```
View the available section for a command using `man -f <command>`.
```
$ man -f passwd
passwd (1)           - change user password
passwd (1ssl)        - compute password hashes
passwd (5)           - the password file
```
To view section 5 of passwd type `man 5 passwd`

Perform a keyword search on a system's man pages with `man -k <keyword>`