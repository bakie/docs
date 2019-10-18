# Table of contents

* [tls](#tls)

## tls
Bash script to easily attach to running tmux sessions.

Place this in /usr/local/bin and make it executable.
```
#!/usr/bin/env bash

TMUX_SESSIONS=`tmux list-sessions 2> /dev/null | awk '{gsub(/:/,""); print $1}' | tr "\n" " "`

if [[ -z $TMUX_SESSIONS ]]; then
  echo "No active tmux sessions"
  exit 0
fi

echo
echo "Choose a Tmux session:"
i=1
for SESSION in $TMUX_SESSIONS
do
 echo "$((i++)) : $SESSION"
done

read MYCHOICE
CHOSEN=`echo $TMUX_SESSIONS | cut -d' ' -f$MYCHOICE 2>/dev/null`

if [ "$CHOSEN" = "" ]; then
  echo Invalid option
  exit
fi

# Attach to the tmux session
tmux attach -t $CHOSEN
```
