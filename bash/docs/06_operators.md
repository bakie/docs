# Operators
## Arithmetic
### Addition
```bash
#!/usr/bin/env bash
a=2
b=3
c=$((a + b))
echo ${c}

Output: 5
```

### Subtraction
```bash
#!/usr/bin/env bash
a=2
b=3
c=$((a - b))
echo ${c}

Output: -1
```

### Multiplication
```bash
#!/usr/bin/env bash
a=2
b=3
c=$((a * b))
echo ${c}

Output: 6
```

### Division
```bash
#!/usr/bin/env bash
a=2
b=3
c=$((a / b))
echo ${c}

Output: 0
```

### Modulus
```bash
#!/usr/bin/env bash
a=2
b=3
c=$((a % b))
echo ${c}

Output: 2
```
## Arithmetic Relational
### Equal
```bash
#!/usr/bin/env bash
a=2
b=2

if [[ ${a} -eq ${b} ]]; then
  echo "two operands are equal"
fi

Output: two operands are equal
```

### Not equal
```bash
#!/usr/bin/env bash
a=2
b=3

if [[ ${a} -ne ${b} ]]; then
  echo "two operands are not equal"
fi

Output: two operands are not equal
```

### Greater than
```bash
#!/usr/bin/env bash
a=3
b=2

if [[ ${a} -gt ${b} ]]; then
  echo "left operand is greater than the right operand"
fi

Output: left operand is greater than the right operand
```

### Less than
```bash
#!/usr/bin/env bash
a=2
b=3

if [[ ${a} -lt ${b} ]]; then
  echo "left operand is less than the value of right operand"
fi

Output: left operand is less than the value of right operand
```

### Greater than or equal
```bash
#!/usr/bin/env bash
a=3
b=3

if [[ ${a} -ge ${b} ]]; then
  echo "left operand is greater than or equal to the value of right operand"
fi

Output: left operand is greater than or equal to the value of right operand
```

### Less than or equal
```bash
#!/usr/bin/env bash
a=2
b=3

if [[ ${a} -lt ${b} ]]; then
  echo "left operand is less than or equal to the value of right operand"
fi

Output: left operand is less than or equal to the value of right operand
```

## Boolean
### Logical negation
```bash
#!/usr/bin/env bash
if ! false; then
  echo "true"
fi

output: true
```

### Logical OR
```bash
#!/usr/bin/env bash
a=2
b=5

if [[ ${a} < 1 || ${b} > 3 ]]; then
  echo "a is smaller than 1 or b is greater than 3"
fi
```

### Logical AND
```bash
#!/usr/bin/env bash
a=2
b=5

if [[ ${a} > 1 && ${b} < 6 ]]; then
  echo "a is greater than 1 and b is smaller than 6"
fi

output: a is greater than 1 and b is smaller than 6
```

## String
### Equal
```bash
#!/usr/bin/env bash
a="abc"
b="abc"

if [[ ${a} == ${b} ]]; then
  echo "The string $a is equal to the string $b"
fi

output: The string abc is equal to the string abc
```

### Not equal
```bash
#!/usr/bin/env bash
a="abc"
b="def"

if [[ ${a} != ${b} ]]; then
  echo "The string $a is not equal to the string $b"
fi

output: The string abc is not equal to the string def
```

### Empty string
```bash
#!/usr/bin/env bash
a=""

if [[ -z ${a} ]]; then
  echo "The string is empty"
fi

output: The string is empty
```

### Not empty string
```bash
#!/usr/bin/env bash
a="abc"

if [[ -n ${a} ]]; then
  echo "The string is not empty"
fi

output: The string is not empty
```
You could also use ```[[ $a ]]```

## File
### Check if file is a directory
```bash
#!/usr/bin/env bash
file="/tmp"

if [[ -d ${file} ]]; then
  echo "$file is a directory"
fi

output: /tmp is a directory
```

### Check if a file exists
```bash
#!/usr/bin/env bash
`touch /tmp/foo.txt`
file="/tmp/foo.txt"

if [[ -f ${file} ]]; then
  echo "$file exists"
fi

output: /tmp/foo.txt exists
```

### Check if a file exists with wildcard
```bash
#!/usr/bin/env bash
`touch /tmp/foo.txt`
file="/tmp/foo*"

if [ -e ${file} ]; then
  echo "$file exists"
fi

output: /tmp/foo* exists
```

### Check is a file is not empty
```bash
#!/usr/bin/env bash
`touch /tmp/foo.txt; echo "abc" > /tmp/foo.txt`
file="/tmp/foo.txt"

if [[ -s ${file} ]]; then
  echo "$file is not empty"
fi

output: /tmp/foo.txt is not empty
```

### Check is a file is a symlink
```bash
#!/usr/bin/env bash
`touch /tmp/test.txt`
`ln -s /etc/test.txt ~/test.txt`

if [[ -L ~/test.txt ]]; then
  echo "~/test.txt is a symlink"
fi

output: ~/test.txt is a symlink
```
