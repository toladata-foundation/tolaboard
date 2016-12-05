QUnit.module('JSHint | adapters/graph-option.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'adapters/graph-option.js should pass jshint.\nadapters/graph-option.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/graph-option.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
