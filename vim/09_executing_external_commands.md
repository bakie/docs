# Executing external commands

`:! ls -al ~` - run the command and show the results

`:r ! ls -al ~` - read and display in the file the output of the command

`:5,10 ! sort` - take the values from lines 5 to 10 and replace them with the command output.
In this case it will sort it. `:5,10 ! ls -l /home` will replace the lines with the output from ls
