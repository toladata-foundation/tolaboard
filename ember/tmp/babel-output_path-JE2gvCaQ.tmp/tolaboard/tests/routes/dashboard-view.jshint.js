define('tolaboard/tests/routes/dashboard-view.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/dashboard-view.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/dashboard-view.js should pass jshint.\nroutes/dashboard-view.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/dashboard-view.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});