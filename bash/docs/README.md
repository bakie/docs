# Bash docs

## Table of contents

* [Shebang line](#shebang-line)
* [Parentheses](#parentheses)
    * [Single parenthesis](#single-parentheses)
    * [Double parenthesis](#double-parentheses)
* [Braces](#braces)
    * [Single braces](#single-braces)
* [Brackets](#brackets)
    * [Single brackets](#single-brackets)
    * [Double brackets](#double-brackets)
* [Variables](#variables)
    * [Global variable](#global-variable)
    * [Local variable](#local-variable)
* [Operators](#operators)
    * [Arithmetic](#arithmetic)
        * [Addition](#addition)
        * [Subtraction](#subtraction)
        * [Multiplication](#multiplication)
        * [Division](#division)
        * [Modules](#modulus)
    * [Arithmetic Relational](#arithmetic-relational)
        * [Equal](#equal)
        * [Not equal](#not-equal)
        * [Greater than](#greater-than)
        * [Less than](#less-than)
        * [Greater than or equal](#greater-than-or-equal)
        * [Less than or equal](#)
    * [Boolean](#boolean)
        * [Logical negation](#logical-negation)
        * [Logical OR](#logical-or)
        * [Logical AND](#logical-and)
    * [String](#string)
        * [Equal](#equal-1)
        * [Not equal](#not-equal-1)
        * [Empty string](#empty-string)
        * [Not empty string](#not-empty-string)
    * [File](#file)
        * [Check if file is a directory](#check-if-file-is-a-directory)
        * [Check if a file exists](#check-if-a-file-exists)
        * [Check if a file exists with wildcard](#check-if-a-file-exists-with-wildcard)
        * [Check if a file is not empty](#check-is-a-file-is-not-empty)
        * [Check if a fle is a symlink](#check-if-a-file-is-a-symlink)
* [Loops](#loops)
    * [For loop](#for-loop)
    * [While loop](#while-loop)
    * [Until loop](#until-loop)

## Shebang line
The first line in a bash script that tells bash what scripting language is being used.
```bash
#!/usr/bin/env bash
```

## Parentheses
##### Single parentheses
```(..)``` Placing a list of commands between parentheses causes a subshell environment to be created (see Command Execution Environment), and each of the commands in list to be executed in that subshell. Since the list is executed in a subshell, variable assignments do not remain in effect after the subshell completes.
With a leading dollar sign, ```$(..)``` is a command substitution:
##### Double parentheses
```((..))``` double parentheses surround an arithmetic instruction.

## Braces
##### Single braces
```{..;}``` Placing a list of commands between curly braces causes the list to be executed in the current shell context. No subshell is created. The semicolon (or newline) following list is required.
With a leading dollar sign, ```${VAR}``` is a parameter expansion

## Brackets
##### Single brackets
```[ .. ]``` alternate form of conditional expressions. Just use double brackets.
##### Double brackets 
```[[ .. ]]``` double brackets surround conditional expressions.

## Variables
There are no data types. A variable in bash can contain a number, a character, a string of characters.

You have no need to declare a variable, just assigning a value to its reference will create it. 
##### Global variable
```bash
#!/usr/bin/env bash
s="Hello World!"
echo $s

output: Hello world!
```

##### Local variable
```bash
#!/usr/bin/env bash
HELLO=Hello
function hello {
  local HELLO=World
  echo $HELLO
}
echo $HELLO
hello
echo $HELLO

output: 
Hello
World
Hello
```

## Operators
### Arithmetic
##### Addition
```bash
#!/usr/bin/env bash
a=2
b=3
c=$((a + b))
echo $c

Output: 5
```

##### Subtraction
```bash
#!/usr/bin/env bash
a=2
b=3
c=$((a - b))
echo $c

Output: -1
```

##### Multiplication
```bash
#!/usr/bin/env bash
a=2
b=3
c=$((a * b))
echo $c

Output: 6
```

##### Division
```bash
#!/usr/bin/env bash
a=2
b=3
c=$((a / b))
echo $c

Output: 0
```

##### Modulus
```bash
#!/usr/bin/env bash
a=2
b=3
c=$((a % b))
echo $c

Output: 2
```

### Arithmetic Relational
##### Equal
```bash
#!/usr/bin/env bash
a=2
b=2

if [[ $a -eq $b ]]; then
  echo "two operands are equal"
fi

Output: two operands are equal
```

##### Not equal
```bash
#!/usr/bin/env bash
a=2
b=3

if [[ $a -ne $b ]]; then
  echo "two operands are not equal"
fi

Output: two operands are not equal
```

##### Greater than
```bash
#!/usr/bin/env bash
a=3
b=2

if [[ $a -gt $b ]]; then
  echo "left operand is greater than the right operand"
fi

Output: left operand is greater than the right operand
```

##### Less than
```bash
#!/usr/bin/env bash
a=2
b=3

if [[ $a -lt $b ]]; then
  echo "left operand is less than the value of right operand"
fi

Output: left operand is less than the value of right operand
```

##### Greater than or equal
```bash
#!/usr/bin/env bash
a=3
b=3

if [[ $a -ge $b ]]; then
  echo "left operand is greater than or equal to the value of right operand"
fi

Output: left operand is greater than or equal to the value of right operand
```

##### Less than or equal
```bash
#!/usr/bin/env bash
a=2
b=3

if [[ $a -lt $b ]]; then
  echo "left operand is less than or equal to the value of right operand"
fi

Output: left operand is less than or equal to the value of right operand
```

### Boolean
##### Logical negation
```bash
#!/usr/bin/env bash
if ! false; then
  echo "true"
fi

output: true
```

##### Logical OR
```bash
#!/usr/bin/env bash
a=2
b=5

if [[ $a < 1 || $b > 3 ]]; then
  echo "a is smaller than 1 or b is greater than 3"
fi
```

##### Logical AND
```bash
#!/usr/bin/env bash
a=2
b=5

if [[ $a > 1 && $b < 6 ]]; then
  echo "a is greater than 1 and b is smaller than 6"
fi

output: a is greater than 1 and b is smaller than 6
```

### String
##### Equal
```bash
#!/usr/bin/env bash
a="abc"
b="abc"

if [[ $a == $b ]]; then
  echo "The string $a is equal to the string $b"
fi

output: The string abc is equal to the string abc
```

##### Not equal
```bash
#!/usr/bin/env bash
a="abc"
b="def"

if [[ $a != $b ]]; then
  echo "The string $a is not equal to the string $b"
fi

output: The string abc is not equal to the string def
```

##### Empty string
```bash
#!/usr/bin/env bash
a=""

if [[ -z $a ]]; then
  echo "The string is empty"
fi

output: The string is empty
```

##### Not empty string
```bash
#!/usr/bin/env bash
a="abc"

if [[ -n $a ]]; then
  echo "The string is not empty"
fi

output: The string is not empty
```
You could also use ```[[ $a ]]```

### File
##### Check if file is a directory
```bash
#!/usr/bin/env bash
file="/tmp"

if [[ -d $file ]]; then
  echo "$file is a directory"
fi

output: /tmp is a directory
```

##### Check if a file exists
```bash
#!/usr/bin/env bash
`touch /tmp/foo.txt`
file="/tmp/foo.txt"

if [[ -f $file ]]; then
  echo "$file exists"
fi

output: /tmp/foo.txt exists
```

##### Check if a file exists with wildcard
```bash
#!/usr/bin/env bash
`touch /tmp/foo.txt`
file="/tmp/foo*"

if [ -e $file ]; then
  echo "$file exists"
fi

output: /tmp/foo* exists
```

##### Check is a file is not empty
```bash
#!/usr/bin/env bash
`touch /tmp/foo.txt; echo "abc" > /tmp/foo.txt`
file="/tmp/foo.txt"

if [[ -s $file ]]; then
  echo "$file is not empty"
fi

output: /tmp/foo.txt is not empty
```

##### Check is a file is a symlink
```bash
#!/usr/bin/env bash
`touch /tmp/test.txt`
`ln -s /etc/test.txt ~/test.txt`

if [[ -L ~/test.txt ]]; then
  echo "~/test.txt is a symlink"
fi

output: /tmp/foo.txt is not empty
```
## Loops
##### For loop
```bash
#!/usr/bin/env bash
for i in `seq 1 3`;
do
  echo $i
done

output:
1
2
3
```

##### While loop
```bash
#!/usr/bin/env bash
COUNTER=0
while [[ $COUNTER -lt 3 ]]; do
  echo "The counter is $COUNTER"
  let COUNTER=COUNTER+1
done

output:
The counter is 0
The counter is 1
The counter is 2
```

##### Until loop
```bash
#!/usr/bin/env bash
COUNTER=3
until [  $COUNTER -lt 0 ]; do
  echo COUNTER $COUNTER
  let COUNTER-=1
done

output:
The counter is 3
The counter is 2
The counter is 1
The counter is 0
```
