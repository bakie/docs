# Arithmetic Relational

* [Equal](#equal)
* [Not equal](#not-equal)
* [Greater than](#greater-than)
* [Less than](#less-than)
* [Greater than or equal](#greater-than-or-equal)
* [Less than or equal](#less-than-or-equal)

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