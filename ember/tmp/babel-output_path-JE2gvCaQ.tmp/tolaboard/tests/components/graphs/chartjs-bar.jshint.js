define('tolaboard/tests/components/graphs/chartjs-bar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/graphs/chartjs-bar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/graphs/chartjs-bar.js should pass jshint.\ncomponents/graphs/chartjs-bar.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/chartjs-bar.js: line 11, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});