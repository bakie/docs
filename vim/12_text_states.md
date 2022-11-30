# Text states

In Vim you can easily go to previous versions and back to later versions using the `:earlier` and `:later` commands.

`:g-` - Go to older text state.  With a count repeat that many times.

`:earlier {count}` - Go to older text state {count} times.

`:earlier {N}s/m/h/d` - Go to older text state about {N} seconds/minutes/hours/days before.

`:earlier {N}f` - Go to older text state {N} file writes before.

`:g+` - Go to newer text state.  With a count repeat that many times.

`:later {count}` - Go to newer text state {count} times.

`:later {N}s/m/h/d` - Go to newer text state about {N} seconds/minutes/hours/days later.

`:later {N}f` - Go to newer text state {N} file writes later.
