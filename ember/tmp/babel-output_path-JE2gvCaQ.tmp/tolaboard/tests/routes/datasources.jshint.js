define('tolaboard/tests/routes/datasources.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/datasources.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/datasources.js should pass jshint.\nroutes/datasources.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/datasources.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});