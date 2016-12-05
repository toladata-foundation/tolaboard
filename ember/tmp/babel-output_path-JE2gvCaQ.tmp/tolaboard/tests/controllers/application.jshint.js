define('tolaboard/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass jshint.\ncontrollers/application.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/application.js: line 4, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/application.js: line 28, col 21, \'spread/rest operator\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/application.js: line 35, col 12, Missing semicolon.\ncontrollers/application.js: line 41, col 51, Missing semicolon.\ncontrollers/application.js: line 60, col 30, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/application.js: line 62, col 17, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/application.js: line 63, col 43, Missing semicolon.\ncontrollers/application.js: line 66, col 48, Missing semicolon.\ncontrollers/application.js: line 67, col 15, Missing semicolon.\ncontrollers/application.js: line 80, col 44, Missing semicolon.\n\n11 errors');
  });
});