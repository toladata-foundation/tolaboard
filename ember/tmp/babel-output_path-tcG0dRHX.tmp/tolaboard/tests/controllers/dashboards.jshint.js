define('tolaboard/tests/controllers/dashboards.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/dashboards.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/dashboards.js should pass jshint.\ncontrollers/dashboards.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/dashboards.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});