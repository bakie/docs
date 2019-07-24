# find

search for files in a directory hierarchy

## Table of contents

* [options](#options)
* [Find files with last modification date 2 days ago](#find-files-with-last-modification-date-2-days-ago)
* [Find file with max and mindepth and exclude dirs](#find-file-with-max-and-mindepth-and-exclude-dirs)
* [Find file with name and execute a grep on it](#find-file-with-name-and-execute-a-grep-on-it)
* [Pipe find output](#pipe-find-output)
    
### options
`-exec <command> ;` - Execute command; true if 0 status is returned. All following arguments to find are 
taken to be arguments to the command until an argument consisting of `;' is encountered.

`-exec <command> {} +` - This  variant  of  the  -exec  action runs the specified command on the selected files, 
but the command line is built by appending each selected file name at the end

`-iname <pattern>` - Base of file name matches shell pattern pattern case insensitive.

`-maxdepth <levels>` - Descend at most <levels> levels of directories below the starting-points.

`-mindepth <levels>` - Do not apply any tests or actions at levels less than levels

`-mtime n` - File's  data  was  last  modified n*24 hours ago.

`-path <pattern>` - File name matches shell pattern <pattern>.

`-print` - print the full file name on the standard output, followed by a newline.

`-print0` - print the full file name on the standard output, followed by a null character 
(instead  of  the  newline  character  that  -print uses).

`-printf format` - print format on the standard output. See man pages for formatting.

`-type <c>` - File is of type <c>:
```
b - block special
c - character
d - directory
p - named pipe
f - regular file
l - symbolic link
s - socket
```

### Find files with last modification date 2 days ago
```
find . -type f -mtime -2 -print0
```

### Find file with max and mindepth and exclude dirs
-mindepth 1 means process all files except the starting-points
```
find . -maxdepth 1 -mindepth 1 -type d ! -path ./exclude_dir -printf '%f\n'
```

### Find file with name and execute a grep on it
```
find . -type f -iname "filename.txt" -exec grep -iq "grep_value" {} \; -printf '%f\n'
```

### Pipe find output
```
find . -type f | xargs chown -R user:user
```
