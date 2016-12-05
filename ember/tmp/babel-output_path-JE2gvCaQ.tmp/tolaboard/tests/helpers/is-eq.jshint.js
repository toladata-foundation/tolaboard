define('tolaboard/tests/helpers/is-eq.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/is-eq.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/is-eq.js should pass jshint.\nhelpers/is-eq.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/is-eq.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nhelpers/is-eq.js: line 7, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
  });
});