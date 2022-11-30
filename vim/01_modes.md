# Modes

## Table of contents
* [Command mode](#command-mode)
* [Insert mode](#insert-mode)
* [Replace mode](#replace-mode)
* [Last line mode](#last-line-mode)

## Command mode
This is the starting mode when you edit a file.
This mode enables you to issue vi command, e.g. insert, append, delete and
other search and navigation that let you move around the file

## Insert mode
When you issue the insert, append or open command you enter the insert mode.
In this mode you can type text to your file or use the arrow keys to navigate around your file.
To go back to command mode from insert mode, simply hit the [esc] key.

## Replace mode
Enter Replace mode with the "R" command in normal mode.
In Replace mode, one character in the line is deleted for every character you type.
If there is no character to delete (at the end of the line), the typed character is appended (as in Insert mode).

## Last line mode
You can only get to last line mode from the command mode and you do this by pressing the colon key [:].
To go back to last line mode from insert mode, simply hit the [esc] key.
