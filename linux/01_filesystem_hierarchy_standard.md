# Filesystem Hierarchy Standard

Source: [linuxbase](https://www.linuxbase.org/betaspecs/fhs/fhs/index.html)

## Table of contents
* [The Root Filesystem](#the-root-filesystem)
* [The /usr hierarchy](#the-usr-hierarchy)
* [The /var hierarchy](#the-var-hierarchy)

## The Root Filesystem
* [/bin](https://www.linuxbase.org/betaspecs/fhs/fhs/ch03s04.html) - binaries
```
Contains commands that may be used by both  the system administrator and by users,
but which are required when no other filesystems are mounted (e.g. in single user mode). 
It may also contain commands which are used indirectly by scripts.
```
* [/boot](https://www.linuxbase.org/betaspecs/fhs/fhs/ch03s05.html) - booting
```
Contains everything required for the boot process except configuration files not needed at boot 
time and the map installer. Thus /boot stores data that is used before the kernel begins executing 
user-mode programs. This may include saved master boot sectors and sector map files.

Programs necessary to arrange for the boot loader to be able to boot a file must be placed in /sbin. 
Configuration files for boot loaders that are not required at boot time must be placed in /etc.
```
* [/dev](https://www.linuxbase.org/betaspecs/fhs/fhs/ch03s06.html) - devices
```
The /dev directory is the location of special or device files.
```
* [/etc](https://www.linuxbase.org/betaspecs/fhs/fhs/ch03s07.html) - et cetera
```
The /etc hierarchy contains configuration files. A "configuration file" is a local file used to 
control the operation of a program; it must be static and cannot be an executable binary.
It is recommended that files be stored in subdirectories of /etc rather than directly in /etc.
```
* [/home](https://www.linuxbase.org/betaspecs/fhs/fhs/ch03s08.html) - home
```
/home is a fairly standard concept, but it is clearly a site-specific filesystem.
The setup will differ from host to host. Therefore, no program should assume any specific location 
for a home directory, rather it should query for it.
```
* [/lib](https://www.linuxbase.org/betaspecs/fhs/fhs/ch03s09.html) - libraries
```
The /lib directory contains those shared library images needed to boot the system and run the commands 
in the root filesystem, ie. by binaries in /bin and /sbin
```
* [/media](https://www.linuxbase.org/betaspecs/fhs/fhs/ch03s11.html) - media
```
This directory contains subdirectories which are used as mount points for removable media such as floppy disks, cdroms and zip disks.
```
* [/mnt](https://www.linuxbase.org/betaspecs/fhs/fhs/ch03s12.html) - mount
```
This directory is provided so that the system administrator may temporarily mount a filesystem as needed. 
The content of this directory is a local issue and should not affect the manner in which any program is run.
```
* [/opt](https://www.linuxbase.org/betaspecs/fhs/fhs/ch03s13.html) - optional
```
/opt is reserved for the installation of add-on application software packages.

A package to be installed in /opt must locate its static files in a separate /opt/<package> or /opt/<provider> directory tree, 
where <package> is a name that describes the software package and <provider> is the provider's 
LANANA registered name.
```
* [/root](https://www.linuxbase.org/betaspecs/fhs/fhs/ch03s14.html) - root
```
The root account's home directory may be determined by developer or local preference, but this is the recommended default location. 
```
* [/run](https://www.linuxbase.org/betaspecs/fhs/fhs/ch03s15.html) - runtime
```
This directory contains system information data describing the system since it was booted.
Files under this directory must be cleared (removed or truncated as appropriate) at the beginning of the boot process.
Programs may have a subdirectory of /run; this is encouraged for programs that use more than one run-time file. 
Users may also have a subdirectory of /run, although care must be taken to appropriately limit access rights to prevent 
unauthorized use of /run itself and other subdirectories.
```
* [/sbin](https://www.linuxbase.org/betaspecs/fhs/fhs/ch03s16.html) - super-binaries
```
Utilities used for system administration (and other root-only commands) are stored in /sbin, /usr/sbin, and /usr/local/sbin.
/sbin contains binaries essential for booting, restoring, recovering, and/or repairing the system in addition to the binaries in /bin.
```
* [/srv](https://www.linuxbase.org/betaspecs/fhs/fhs/ch03s17.html) - serve
```
contains site-specific data which is served by this system.
```
* [/tmp](https://www.linuxbase.org/betaspecs/fhs/fhs/ch03s18.html) - temporary
```
The /tmp directory must be made available for programs that require temporary files.
Programs must not assume that any files or directories in /tmp are preserved between invocations of the program.
```

## The /usr hierarchy
* [/usr](https://www.linuxbase.org/betaspecs/fhs/fhs/ch04.html) - Unix system resources
```
/usr is the second major section of the filesystem. /usr is shareable, read-only data. 
That means that /usr should be shareable between various FHS-compliant hosts and must not be written to. 
Any information that is host-specific or varies with time is stored elsewhere.
```
* [/usr/bin](https://www.linuxbase.org/betaspecs/fhs/fhs/ch04s04.html)
```
This is the primary directory of executable commands on the system
```
* [/usr/include](https://www.linuxbase.org/betaspecs/fhs/fhs/ch04s05.html)
```
This is where all of the system's general-use include files for the C programming language should be places.
```
* [/usr/lib](https://www.linuxbase.org/betaspecs/fhs/fhs/ch04s06.html)
```
/usr/lib includes object files and libraries.
```
* [/usr/libexec](https://www.linuxbase.org/betaspecs/fhs/fhs/ch04s07.html)
```
/usr/libexec includes internal binaries that are not intended to be executed directly by users or shell scripts.
```
* [/usr/lib<qual>](https://www.linuxbase.org/betaspecs/fhs/fhs/ch04s08.html)
```
/usr/lib<qual> performs the same role as /usr/lib for an alternate binary format, except that the symbolic links /usr/lib<qual>/sendmail and /usr/lib<qual>/X11 are not required.
```
* [/usr/local](https://www.linuxbase.org/betaspecs/fhs/fhs/ch04s09.html)
```
The /usr/local hierarchy is for use by the system administrator when installing software locally. It needs to be safe from being overwritten when the system software is updated. It may be used for programs and data that are shareable amongst a group of hosts, but not found in /usr.

Locally installed software must be placed within /usr/local rather than /usr unless it is being installed to replace or upgrade software in /usr.
```
* [/usr/sbin](https://www.linuxbase.org/betaspecs/fhs/fhs/ch04s10.html)
```
This directory contains any non-essential binaries used exclusively by the system administrator. System administration programs that are required for system repair, system recovery, mounting /usr, or other essential functions must be placed in /sbin instead.
```
* [/usr/share](https://www.linuxbase.org/betaspecs/fhs/fhs/ch04s11.html)
```
The /usr/share hierarchy is for all read-only architecture independent data files. 

This hierarchy is intended to be shareable among all architecture platforms of a given OS.
```
* [/usr/src](https://www.linuxbase.org/betaspecs/fhs/fhs/ch04s12.html)
```
Source code may be placed in this subdirectory, only for reference purposes.
```
## The /var hierarchy
* [/var](https://www.linuxbase.org/betaspecs/fhs/fhs/ch05.html) - variable
```
/var contains variable data files. This includes spool directories and files, administrative and logging data, and transient and temporary files.
```
* [/var/account](https://www.linuxbase.org/betaspecs/fhs/fhs/ch05s04.html) - variable
```
This directory holds the current active process accounting log and the composite process usage data.
```
* [/var/cache](https://www.linuxbase.org/betaspecs/fhs/fhs/ch05s05.html) - variable
```
/var/cache is intended for cached data from applications.
```
* [/var/crash](https://www.linuxbase.org/betaspecs/fhs/fhs/ch05s06.html) - variable
```
This directory holds system crash dumps. As of the date of this release of the standard, system crash dumps were not supported under Linux but may be supported by other systems which may comply with the FHS.
```
* [/var/games](https://www.linuxbase.org/betaspecs/fhs/fhs/ch05s07.html) - variable
```
Any variable data relating to games in /usr should be placed here. /var/games should hold the variable data previously found in /usr; static data, such as help text, level descriptions, and so on, must remain elsewhere, such as /usr/share/games.
```
* [/var/lib](https://www.linuxbase.org/betaspecs/fhs/fhs/ch05s08.html) - variable
```
This hierarchy holds state information pertaining to an application or the system. State information is data that programs modify while they run, and that pertains to one specific host. Users must never need to modify files in /var/lib to configure a package's operation, and the specific file hierarchy used to store the data must not be exposed to regular users.
```
* [/var/lock](https://www.linuxbase.org/betaspecs/fhs/fhs/ch05s09.html) - variable
```
Lock files should be stored within the /var/lock directory structure.
```
* [/var/log](https://www.linuxbase.org/betaspecs/fhs/fhs/ch05s10.html) - variable
```
This directory contains miscellaneous log files. Most logs must be written to this directory or an appropriate subdirectory.
```
* [/var/mail](https://www.linuxbase.org/betaspecs/fhs/fhs/ch05s11.html) - variable
```
The mail spool must be accessible through /var/mail and the mail spool files must take the form <username>.
```
* [/var/opt](https://www.linuxbase.org/betaspecs/fhs/fhs/ch05s12.html) - variable
```
Variable data of the packages in /opt must be installed in /var/opt/<subdir>, where <subdir> is the name of the subtree in /opt where the static data from an add-on software package is stored, except where superseded by another file in /etc.
```
* [/var/run](https://www.linuxbase.org/betaspecs/fhs/fhs/ch05s13.html) - variable
```
This directory was once intended for system information data describing the system since it was booted. These functions have been moved to /run; this directory exists to ensure compatibility with systems and software using an older version of this specification.
```
* [/var/spool](https://www.linuxbase.org/betaspecs/fhs/fhs/ch05s14.html) - variable
```
/var/spool contains data which is awaiting some kind of later processing. Data in /var/spool represents work to be done in the future (by a program, user, or administrator)
```
* [/var/tmp](https://www.linuxbase.org/betaspecs/fhs/fhs/ch05s15.html) - variable
```
The /var/tmp directory is made available for programs that require temporary files or directories that are preserved between system reboots. Therefore, data stored in /var/tmp is more persistent than data in /tmp.
```
* [/var/yp](https://www.linuxbase.org/betaspecs/fhs/fhs/ch05s16.html) - variable
```
Variable data for the Network Information Service (NIS), formerly known as the Sun Yellow Pages (YP), must be placed in this directory.
```
