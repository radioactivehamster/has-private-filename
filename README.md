### NAME

`has-private-filename` – Determine if a filename is “private” e.g. prefixed with
a “_” (underscore.)

### SYNOPSIS

```js
var hasPrivateFilename = require('has-private-filename');

hasPrivateFilename(str);
```

### DESCRIPTION

The `has-private-filename()` extension takes a file base-name string representation and determines if it matches the common “private” file naming convention. In which private files are prefixed with an underscore “_” whereas standard files are not.

### RETURN VALUES

Upon successful completion, the value of `true` is returned; otherwise the value `false` is returned to indicate the inverse.

### EXAMPLES

The following demonstrates the expected return values.

```js
'use strict';

var assert = require('assert');
var hasPrivateFilename = require('has-private-filename');

assert(hasPrivateFilename('_example.file') === true);
assert(hasPrivateFilename('example.file') === false);
```

### AUTHORS

Benner, James <<http://radioactivehamster.com>>
