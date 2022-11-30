# Exiting

`:w` - write (save) the file, but don't exit

`:w ! sudo tee %` - write (save) the file using sudo

`:wq` - write (save) and quit

`ZZ` - same as `:wq`

`:q` - quit (fails if there are unsaved changes)

`:q!` - quit and throw away unsaved changes

`ZQ` - same as `:q!`

`:saveas filename.txt` - save the file as filename.txt in the current working directory. You can also pass an absolute path or change directory using the `:cd path_of_directory`
