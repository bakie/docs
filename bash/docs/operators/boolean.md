# Boolean

* [Logical negation](#logical-negation)
* [Logical OR](#logical-or)
* [Logical AND](#logical-and)

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