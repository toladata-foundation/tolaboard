define('tolaboard/tests/components/graphs/test-graph.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/graphs/test-graph.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/graphs/test-graph.js should pass jshint.\ncomponents/graphs/test-graph.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/test-graph.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/test-graph.js: line 33, col 44, Missing semicolon.\n\n3 errors');
  });
});