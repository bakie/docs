# Loops
### For loop
```bash
#!/usr/bin/env bash
for i in `seq 1 3`;
do
  echo ${i}
done

output:
1
2
3
```

### While loop
```bash
#!/usr/bin/env bash
COUNTER=0
while [[ ${COUNTER} -lt 3 ]]; do
  echo "The counter is $COUNTER"
  let COUNTER=COUNTER+1
done

output:
The counter is 0
The counter is 1
The counter is 2
```

### Until loop
```bash
#!/usr/bin/env bash
COUNTER=3
until [[ ${COUNTER} -lt 0 ]]; do
  echo COUNTER ${COUNTER}
  let COUNTER-=1
done

output:
The counter is 3
The counter is 2
The counter is 1
The counter is 0
```