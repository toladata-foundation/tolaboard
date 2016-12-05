QUnit.module('JSHint | initializers/ajax-prefilter.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'initializers/ajax-prefilter.js should pass jshint.\ninitializers/ajax-prefilter.js: line 2, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ninitializers/ajax-prefilter.js: line 11, col 50, Missing semicolon.\ninitializers/ajax-prefilter.js: line 17, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
});
