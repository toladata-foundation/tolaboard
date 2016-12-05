QUnit.module('JSHint | models/graph-option.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'models/graph-option.js should pass jshint.\nmodels/graph-option.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/graph-option.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/graph-option.js: line 8, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
});
