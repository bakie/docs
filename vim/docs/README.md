# Vim docs

## Table of contents

* [Modes](#modes)
    * [Command mode](#command-mode)
    * [Insert mode](#insert-mode)
    * [Replace mode](#replace-mode)
    * [Last line mode](#last-line-mode)
* [Cursor movement](#cursor-movement)
* [Inserting/appending text](#insertingappending-text)
* [Editing](#editing)
* [Marking text (visual mode)](#marking-text-visual-mode)
* [Cut and paste](#cut-and-paste)
* [Search and replace](#search-and-replace)
* [Exiting](#exiting)
* [Executing external commands](#executing-external-commands)
* [Buffers](#buffers-working-with-multiple-files)
* [Tabs](#tabs)
* [Text states](#text-states)

## Modes
### Command mode
This is the starting mode when you edit a file. 
This mode enables you to issue vi command, e.g. insert, append, delete and 
other search and navigation that let you move around the file

### Insert mode
When you issue the insert, append or open command you enter the insert mode.
In this mode you can type text to your file or use the arrow keys to navigate around your file.
To go back to command mode from insert mode, simply hit the [esc] key.

### Replace mode
Enter Replace mode with the "R" command in normal mode.
In Replace mode, one character in the line is deleted for every character you type.
If there is no character to delete (at the end of the line), the typed character is appended (as in Insert mode).

### Last line mode
You can only get to last line mode from the command mode and you do this by pressing the colon key [:].
To go back to last line mode from insert mode, simply hit the [esc] key.

## Cursor movement
`h` - move cursor left

`j` - move cursor down

`k` - move cursor up

`l` - move cursor right

`2h` - move cursor 2 character left

`3j` - move cursor 3 lines down

`4k` - move cursor 4 lines up

`5l` - move cursor 5 character left

`gg` - go to the first line of the document

`G` - go to the last line of the document

`w` - jump forwards to the start of a word

`e` - jump forwards to the end of a word

`b` - jump backwards to the start of a word

`0` - jump to the start of the line

`$` - jump to the end of the line

`}` - jump to the next paragraph

`{` - jump to the previous paragraph

`2}` - jump 2 paragraphs forward

`3{` - jump 3 paragraphs backwards

`zz` - center cursor on the screen

`5G` - go to line 5

## Inserting/appending text
`i` - insert before the cursor

`I` - insert at the beginning of the line

`a` - insert (append) after the cursor

`A` - insert (append) at the end of the line

`o` - append a new line below the current line

`O` - append a new line above the current line

`esc` - exit insert mode

## Editing
`r` - replace a single character

`J` - join line below to the current one with one space in between

`gJ` - join line below to the current one without space in between

`cc` - change (replace) entire line

`C` - change (replace) to the end of the line

`ciw` - change (replace) entire word

`cw` - change (replace) to the end of the word

`s` - delete character and substitute text

`S` - same as `cc`

`u` - undo

`ctrl` + `r` - redo

`.` - repeat last command

## Marking text (visual mode)
`v` - start visual mode, mark lines, then do a command (e.g. yank)

`V` - start linewuse visual mode

`o` - move to the other end of marked area

`O` - move to the other cornet of a block

`ctrl` + `v` -  start visual block mode

`aw` - mark a word

`esc` - exit visual mode

## Cut and paste
`yy` - yank (copy) a line

`3yy` - yank (copy) 3 lines

`yw` - yank (copy) the characters of the word from the cursor position to the start of the next word

`y$` - yank (copy) to end of line

`p` - put (paste) the clipboard after the cursor

`P` - put (paste) the clipboard before the cursor

`dd` - delete (cut) a line

`3dd` - delete (cut) 2 lines

`dw` - delete (cut) the characters of the word from the cursor position to the start of the next word

`de` - delete (cut) the characters of the word from the cursor position to the end of the word

`D` - delete (cut) to the end of the line

`d$` - same as `D`

`x` - delete (cut) character

## Search and replace
`/pattern` - search for pattern

`?pattern` - search backward for pattern

`n` - repeat search in same direction

`N` - repeat search in opposite direction

`:%s/old/new/g` - replace all old with new troughout the file

`:%s/old/new/gc` - replace all old with new troughout the file with confirmations

`:noh` - remove highlighting of search matches

## Exiting
`:w` - write (save) the file, but don't exit

`:w ! sudo tee %` - write (save) the file using sudo

`:wq` - write (save) and quit

`ZZ` - same as `:wq`

`:q` - quit (fails if there are unsaved changes)

`:q!` - quit and throw away unsaved changes

`ZQ` - same as `:q!`

`:saveas filename.txt` - save the file as filename.txt in the current working directory. You can also pass an absolute path.

## Executing external commands
`:! ls -al ~` - run the command and show the results

`:r ! ls -al ~` - read and display in the file the output of the command

`:5,10 ! sort` - take the values from lines 5 to 10 and replace them with the command output.
In this case it will sort it. `:5,10 ! ls -l /home` will replace the lines with the output from ls

## Buffers (working with multiple files)
`:ls` - list all open buffers

`:bad filename` - add a new buffer address.

`:bn` - go to the next buffer

`:bp` - go to the previous buffer

`ctrl` + `6` - switch between buffers.

`:bd` - delete a buffer (close a file)

`:sp filename` - open a file in a new buffer and horizontally split window

`:vsp filename` - open a file in a new buffer and vertically split window

`ctrl` + `ww` - switch between windows

`ctrl` + `wh` - move cursor to the left window (vertical split)

`ctrl` + `wl` - move cursor to the right window (vertical split)

`ctrl` + `wj` - move cursor to the window below (horizontal split)

`ctrl` + `wk` - move cursor to the window above (horizontal split)

`:f` - show the characteristics of the file currently editing

## Tabs
`:tabnew filename` - open a file in a new tab

`ctrl` + `wT` - move the current split window into its own tab

`gt` - move to the next tab

`gT` - move to the previous tab

`tabmove #` - move the current tab to the #th position (indexed from 0)

`:tabc` - close the current tab and all its windows

`:tabo` - close all tabs except the current one

`:tabdo command` - run the command on all tabs (e.g. `:tabdo -q` closes all opened tabs)

## Text states
In Vim you can easily go to previous versions and back to later versions using the `:earlier` and `:later` commands.

`:g-` - Go to older text state.  With a count repeat that many times.

`:earlier {count}` - Go to older text state {count} times.

`:earlier {N}s/m/h/d` - Go to older text state about {N} seconds/minutes/hours/days before.

`:earlier {N}f` - Go to older text state {N} file writes before.

`:g+` - Go to newer text state.  With a count repeat that many times.

`:later {count}` - Go to newer text state {count} times.

`:later {N}s/m/h/d` - Go to newer text state about {N} seconds/minutes/hours/days later.

`:later {N}f` - Go to newer text state {N} file writes later.
