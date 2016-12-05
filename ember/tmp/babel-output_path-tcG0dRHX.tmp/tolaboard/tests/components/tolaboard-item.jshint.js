define('tolaboard/tests/components/tolaboard-item.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/tolaboard-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/tolaboard-item.js should pass jshint.\ncomponents/tolaboard-item.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/tolaboard-item.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});