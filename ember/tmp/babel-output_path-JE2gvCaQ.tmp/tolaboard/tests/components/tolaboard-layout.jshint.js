define('tolaboard/tests/components/tolaboard-layout.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/tolaboard-layout.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/tolaboard-layout.js should pass jshint.\ncomponents/tolaboard-layout.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/tolaboard-layout.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/tolaboard-layout.js: line 26, col 65, Missing semicolon.\n\n3 errors');
  });
});