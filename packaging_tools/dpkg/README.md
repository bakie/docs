# Table of contents

* [List installed packages](#list-installed-packages)
* [Check if a specific package is installed](#check-if-a-specific-package-is-installed)
* [Get information from a .deb file](#get-information-from-a-deb-file)
* [Determine the contents of a .deb file](#determine-the-contents-of-a-deb-file)
* [Install a .deb file](#install-a-deb-file)
* [Remove a package](#remove-a-package)
    
### List installed packages
```
dpkg --get-selections
```

### Check if a specific package is installed
```
dpkg --get-selections <package name>
dpkg -l <package name>
```

### Get information from a .deb file
```
dpkg-deb -I <debian file.deb>
```

### Determine the contents of a .deb file
```
dpkg-deb --contents <debian file.deb>
```

### Install a .deb file
```
dpkg -i <debian file.deb>
```

### Remove a package
```
dpkg -r <package name>
dpkg -P <package name>
```

-r only removes the package, while -P removes the package and purges the configuration files.
