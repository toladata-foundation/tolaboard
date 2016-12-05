define('tolaboard/tests/components/render-tolaboard-item.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/render-tolaboard-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/render-tolaboard-item.js should pass jshint.\ncomponents/render-tolaboard-item.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/render-tolaboard-item.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/render-tolaboard-item.js: line 19, col 71, Missing semicolon.\ncomponents/render-tolaboard-item.js: line 71, col 35, [\'col\'] is better written in dot notation.\ncomponents/render-tolaboard-item.js: line 72, col 35, [\'row\'] is better written in dot notation.\ncomponents/render-tolaboard-item.js: line 73, col 38, [\'size_x\'] is better written in dot notation.\ncomponents/render-tolaboard-item.js: line 74, col 38, [\'size_y\'] is better written in dot notation.\n\n7 errors');
  });
});