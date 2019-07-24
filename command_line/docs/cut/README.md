# cut

remove sections from each line of files

## Table of contents

* [options](#options)
* [cut on space and show field 2 until the end of the line](#cut-on-space-and-show-field-2-until-the-end-of-the-line)

### options
`-d'<delimiter>'` - use delimeter for field delimiter

`-f` - select only these fields

### cut on space and show field 2 until the end of the line
```
cut -d' ' -f 2- <filename>
```