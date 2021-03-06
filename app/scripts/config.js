/* global require */
//|**
//|
//| require
//|
//| This file is the main application file
//|
//| .--------------------------------------------------------------.
//| | NAMING CONVENTIONS:                                          |
//| |--------------------------------------------------------------|
//| | Singleton-literals and prototype objects | PascalCase        |
//| |--------------------------------------------------------------|
//| | Functions and public variables           | camelCase         |
//| |--------------------------------------------------------------|
//| | Global variables and constants           | UPPERCASE         |
//| |--------------------------------------------------------------|
//| | Private variables                        | _underscorePrefix |
//| '--------------------------------------------------------------'
//|
//| Comment syntax for the entire project follows JSDoc:
//| - http://code.google.com/p/jsdoc-toolkit/wiki/TagReference
//|
//'*/
require.config({
	deps: ['application'],
	waitSeconds: 45,
	paths: {
		requirejs:  'vendor/requirejs/require',
		jquery:     'vendor/jquery/dist/jquery'
	},
	shim: {
	}
});
