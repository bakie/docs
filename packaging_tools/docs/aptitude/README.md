# Table of contents

* [List installed packages](#list-installed-packages)
* [List installed packages names only](#list-installed-packages-names-only)
    
### List installed packages
```
aptitude search "package_name ~i"
```

### List installed packages names only
```
aptitude search "package_name ~i" -F "%p"
```
