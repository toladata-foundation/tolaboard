define('tolaboard/tests/unit/services/dummy-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/dummy-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/dummy-test.js should pass jshint.');
  });
});