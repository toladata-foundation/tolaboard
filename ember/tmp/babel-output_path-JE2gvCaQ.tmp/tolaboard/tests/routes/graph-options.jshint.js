define('tolaboard/tests/routes/graph-options.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/graph-options.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/graph-options.js should pass jshint.\nroutes/graph-options.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/graph-options.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});