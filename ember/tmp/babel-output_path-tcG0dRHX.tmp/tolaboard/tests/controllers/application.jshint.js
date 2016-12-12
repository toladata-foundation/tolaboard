define('tolaboard/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass jshint.\ncontrollers/application.js: line 7, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/application.js: line 9, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/application.js: line 25, col 21, \'spread/rest operator\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/application.js: line 38, col 30, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/application.js: line 40, col 17, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/application.js: line 41, col 43, Missing semicolon.\ncontrollers/application.js: line 44, col 49, Missing semicolon.\ncontrollers/application.js: line 45, col 48, Missing semicolon.\ncontrollers/application.js: line 46, col 15, Missing semicolon.\ncontrollers/application.js: line 54, col 12, Missing semicolon.\ncontrollers/application.js: line 61, col 51, Missing semicolon.\n\n11 errors');
  });
});