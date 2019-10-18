# Variables
There are no data types. A variable in bash can contain a number, a character, a string of characters.

You have no need to declare a variable, just assigning a value to its reference will create it. 
### Global variable
```bash
#!/usr/bin/env bash
s="Hello World!"
echo $s

output: Hello world!
```

### Local variable
```bash
#!/usr/bin/env bash
HELLO=Hello
function hello {
  local HELLO=World
  echo ${HELLO}
}
echo ${HELLO}
hello
echo ${HELLO}

output: 
Hello
World
Hello
```