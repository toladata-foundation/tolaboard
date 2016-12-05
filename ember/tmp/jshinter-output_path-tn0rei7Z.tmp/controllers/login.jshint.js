QUnit.module('JSHint | controllers/login.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/login.js should pass jshint.\ncontrollers/login.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/login.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/login.js: line 54, col 21, \'spread/rest operator\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/login.js: line 66, col 12, Missing semicolon.\ncontrollers/login.js: line 73, col 5, Missing semicolon.\n\n5 errors');
});
