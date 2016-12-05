QUnit.module('JSHint | routes/login.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/login.js should pass jshint.\nroutes/login.js: line 7, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/login.js: line 8, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/login.js: line 10, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/login.js: line 39, col 21, \'spread/rest operator\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
});
