# Parentheses
### Single parentheses
```(..)``` Placing a list of commands between parentheses causes a subshell environment to be created (see Command Execution Environment), and each of the commands in list to be executed in that subshell. Since the list is executed in a subshell, variable assignments do not remain in effect after the subshell completes.
With a leading dollar sign, ```$(..)``` is a command substitution:
### Double parentheses
```((..))``` double parentheses surround an arithmetic instruction.