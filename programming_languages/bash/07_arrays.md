# Arrays

* [Creation](#creation)
    * [Index array](#indexed-array)
    * [Associative array](#associative-array)
* [Access](#access)
    * [Values](#values)
    * [Indices and keys](#indices-and-keys)
    * [Length](#length)
* [Operations](#operations)
    * [Add](#add)
    * [Delete](#delete)

### Creation
#### Indexed array
```bash
#!/usr/bin/env bash

declare -a my_array
my_array=(foo bar)
echo ${my_array[@]}

output: foo bar 
```
Note: for an indexed array you can also create it on the fly
```bash
#!/usr/bin/env bash

my_array=(foo bar)
echo ${my_array[@]}

output: foo bar
```
#### Associative array
```bash
#!/usr/bin/env bash

declare -A my_associative_array
my_associative_array=([foo]=bar [baz]=foobar)

echo ${my_associative_array[@]}

output: foobar bar
```
Note: An associative array needs to be declared first!

### Access
#### Values
```bash
#!/usr/bin/env bash

my_array=(foo bar)
echo the values of the array are: ${my_array[@]}

declare -A my_associative_array 
my_associative_array=([foo]=bar [baz]=foobar)
echo the values of the associative array are: ${my_associative_array[@]}

output: 
the values of the array are: foo bar
the values of the associative array are: foobar bar
```

#### Indices and keys
```bash
#!/usr/bin/env bash                                                                                                                                      

my_array=(foo bar)
echo the indices of the array are: ${!my_array[@]}

declare -A my_associative_array 
my_associative_array=([foo]=bar [baz]=foobar)
echo the keys of the associative array are: ${!my_associative_array[@]}

output:
the indices of the array are: 0 1
the keys of the associative array are: baz foo
```

#### Length
```bash
#!/usr/bin/env bash                                                                                                                                      

my_array=(foo bar)
echo the length of the array is: ${#my_array[@]}

declare -A my_associative_array 
my_associative_array=([foo]=bar [baz]=foobar)
echo the length of the associative array is: ${#my_associative_array[@]}

output:
the length of the array is: 2
the length of the associative array is: 2
```

### Operations
#### Add
```bash
#!/usr/bin/env bash

my_array=(foo bar)
echo the values of the array are: ${my_array[@]}
my_array+=(baz)
echo the values of the array are: ${my_array[@]}

declare -A my_associative_array 
my_associative_array=([foo]=bar [baz]=foobar)
echo the values of the associative array are: ${my_associative_array[@]}
my_associative_array[bar]="foo"
echo the values of the associative array are: ${my_associative_array[@]}

output: 
the values of the array are: foo bar
the values of the array are: foo bar baz
the values of the associative array are: foobar bar
the values of the associative array are: foo foobar bar
```

#### Delete
```bash
#!/usr/bin/env bash

my_array=(foo bar)
echo the values of the array are: ${my_array[@]}
unset my_array[0]
echo the values of the array are: ${my_array[@]}

declare -A my_associative_array 
my_associative_array=([foo]=bar [baz]=foobar)
echo the values of the associative array are: ${my_associative_array[@]}
unset my_associative_array[foo]
echo the values of the associative array are: ${my_associative_array[@]}

output:
the values of the array are: foo bar
the values of the array are: bar
the values of the associative array are: foobar bar
the values of the associative array are: foobar
```
