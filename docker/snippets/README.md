# Table of contents

* [dsh](#dsh)

## dsh
Bash script to easily "docker exec" into a running Docker container.

Place this in /usr/bin and make it executable.
```
#!/usr/bin/env bash

CONTAINERS=`docker ps | awk 'NR==1 {offset=index($0,"NAMES")};NR>1{print substr($0,offset)}' | sort -f | tr "\n" " "`

echo
echo "Choose a Docker container:"
i=1
for container in $CONTAINERS
do
 echo "$((i++)) : $container"
done

read MYCHOICE
CHOSEN=`echo $CONTAINERS | cut -d' ' -f$MYCHOICE 2>/dev/null`

if [ "$CHOSEN" = "" ]; then
  echo Invalid option
  exit
fi

# try running bash, if exit code 126 then try running sh
for SHELL in bash sh
do
  clear
  echo " "
  echo -e " Logged into $CHOSEN with $SHELL"
  echo  " "
  tput sgr0
  docker exec -it $CHOSEN $SHELL
  if [ $? -ne 126 ]; then
    break
  fi
done
```
