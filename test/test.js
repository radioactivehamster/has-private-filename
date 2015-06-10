'use strict';

var assert             = require('assert');
var hasPrivateFilename = require('../');

describe('has-private-filename', function () {
    it('should determine that "_example.file" is private', function () {
        assert(hasPrivateFilename('_example.file') === true);
    });

    it('should determine that "example.file" is public', function () {
        assert(hasPrivateFilename('example.file') === false);
    });
});
