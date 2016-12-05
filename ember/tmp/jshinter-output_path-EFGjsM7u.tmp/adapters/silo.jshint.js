QUnit.module('JSHint | adapters/silo.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'adapters/silo.js should pass jshint.\nadapters/silo.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/silo.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nadapters/silo.js: line 8, col 18, Missing semicolon.\n\n3 errors');
});
