define('tolaboard/tests/services/color-palette.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/color-palette.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/color-palette.js should pass jshint.\nservices/color-palette.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/color-palette.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});