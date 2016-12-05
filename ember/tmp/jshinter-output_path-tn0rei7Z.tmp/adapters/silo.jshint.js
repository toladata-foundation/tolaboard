QUnit.module('JSHint | adapters/silo.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'adapters/silo.js should pass jshint.\nadapters/silo.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/silo.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/silo.js: line 4, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nadapters/silo.js: line 10, col 18, Missing semicolon.\n\n4 errors');
});
