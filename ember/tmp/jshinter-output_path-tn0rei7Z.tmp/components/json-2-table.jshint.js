QUnit.module('JSHint | components/json-2-table.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/json-2-table.js should pass jshint.\ncomponents/json-2-table.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/json-2-table.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
