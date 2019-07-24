# uname

print system information

## Table of contents

* [options](#options)

### options
`-a` - print all information
```
$ uname -a
Linux mephisto 4.15.0-54-generic #58-Ubuntu SMP Mon Jun 24 10:55:24 UTC 2019 x86_64 x86_64 x86_64 GNU/Linux
```

`-s` - print the kernel name
```
$ uname -s
Linux
```

`-n` - print the network node hostname 
```
$ uname -n
mephisto
```

`-r` - print the kernel release 
```
$ uname -r
4.15.0-54-generic
```

`-v` - print the kernel version 
```
$ uname -v
#58-Ubuntu SMP Mon Jun 24 10:55:24 UTC 2019
```

`-m` - print the machine hardware name 
```
$ uname -m
x86_64
```

`-p` -  print the processor type (non-portable)
```
$ uname -p
x86_64
```

`-i` - print the hardware platform (non-portable)
```
$ uname -i
x86_64
``` 

`-o` - print the operating system
```
$ uname -o
GNU/Linux
```