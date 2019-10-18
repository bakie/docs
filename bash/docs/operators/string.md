# String

* [Equal](#equal)
* [Not equal](#not-equal)
* [Empty string](#empty-string)
* [Not empty string](#not-empty-string)

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