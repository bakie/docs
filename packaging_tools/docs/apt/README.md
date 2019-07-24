# Table of contents

* [Get packages information from repositories](#get-packages-information-from-repositories)
* [Update all packages](#update-all-packages)
* [Search for an application](#search-for-an-application)
* [Install package](#install-package)
* [Remove package](#remove-package)
* [Remove packages that are no longer needed](#remove-packages-that-are-no-longer-needed)
* [Download dependencies flagged as needed](#download-dependencies-flagged-as-needed)
    
### Get packages information from repositories
```
apt update
```

### Update all packages
```
apt upgrade
```

### Search for an application
```
apt-cache search <package name>
```

### Install package
```
apt install <package name>
```

### Remove package
```
apt remove <package name>
apt remove --purge <package name>
```
The --purge option also purges the configuration files.

### Remove packages that are no longer needed
```
apt autoremove
```

### Download dependencies flagged as needed
```
apt -f upgrade
```