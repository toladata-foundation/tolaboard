define('tolaboard/tests/components/graphs/chartjs-bar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/graphs/chartjs-bar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/graphs/chartjs-bar.js should pass jshint.\ncomponents/graphs/chartjs-bar.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/chartjs-bar.js: line 20, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/chartjs-bar.js: line 37, col 65, Missing semicolon.\ncomponents/graphs/chartjs-bar.js: line 38, col 66, Missing semicolon.\ncomponents/graphs/chartjs-bar.js: line 56, col 48, Missing semicolon.\ncomponents/graphs/chartjs-bar.js: line 64, col 47, Missing semicolon.\ncomponents/graphs/chartjs-bar.js: line 66, col 11, Missing semicolon.\n\n7 errors');
  });
});