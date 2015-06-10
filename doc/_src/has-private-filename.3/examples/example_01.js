var assert = require('assert');
var hasPrivateFilename = require('has-private-filename');

assert(hasPrivateFilename('_example.file') === true);
assert(hasPrivateFilename('example.file') === false);
