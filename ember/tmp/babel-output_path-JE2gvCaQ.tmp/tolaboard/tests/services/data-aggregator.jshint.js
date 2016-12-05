define('tolaboard/tests/services/data-aggregator.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/data-aggregator.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/data-aggregator.js should pass jshint.\nservices/data-aggregator.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/data-aggregator.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nservices/data-aggregator.js: line 24, col 58, Missing semicolon.\nservices/data-aggregator.js: line 26, col 82, Missing semicolon.\n\n4 errors');
  });
});