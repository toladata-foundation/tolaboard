QUnit.module('JSHint | serializers/datasource.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'serializers/datasource.js should pass jshint.\nserializers/datasource.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nserializers/datasource.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
