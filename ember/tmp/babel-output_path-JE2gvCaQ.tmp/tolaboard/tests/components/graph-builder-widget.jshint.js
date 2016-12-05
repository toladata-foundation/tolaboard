define('tolaboard/tests/components/graph-builder-widget.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/graph-builder-widget.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/graph-builder-widget.js should pass jshint.\ncomponents/graph-builder-widget.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graph-builder-widget.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graph-builder-widget.js: line 15, col 61, Missing semicolon.\ncomponents/graph-builder-widget.js: line 81, col 47, Missing semicolon.\ncomponents/graph-builder-widget.js: line 98, col 75, Missing semicolon.\ncomponents/graph-builder-widget.js: line 120, col 87, Missing semicolon.\ncomponents/graph-builder-widget.js: line 128, col 64, Missing semicolon.\ncomponents/graph-builder-widget.js: line 162, col 39, Missing semicolon.\ncomponents/graph-builder-widget.js: line 163, col 52, Missing semicolon.\ncomponents/graph-builder-widget.js: line 202, col 82, Missing semicolon.\ncomponents/graph-builder-widget.js: line 204, col 53, Missing semicolon.\n\n11 errors');
  });
});