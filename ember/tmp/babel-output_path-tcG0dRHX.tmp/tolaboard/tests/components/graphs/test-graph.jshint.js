define('tolaboard/tests/components/graphs/test-graph.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/graphs/test-graph.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/graphs/test-graph.js should pass jshint.\ncomponents/graphs/test-graph.js: line 17, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/test-graph.js: line 19, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/test-graph.js: line 37, col 10, Missing semicolon.\ncomponents/graphs/test-graph.js: line 48, col 67, Missing semicolon.\ncomponents/graphs/test-graph.js: line 50, col 91, Missing semicolon.\ncomponents/graphs/test-graph.js: line 55, col 51, Missing semicolon.\ncomponents/graphs/test-graph.js: line 56, col 37, Missing semicolon.\ncomponents/graphs/test-graph.js: line 58, col 63, Missing semicolon.\ncomponents/graphs/test-graph.js: line 58, col 65, Missing semicolon.\ncomponents/graphs/test-graph.js: line 59, col 64, Missing semicolon.\ncomponents/graphs/test-graph.js: line 59, col 66, Missing semicolon.\ncomponents/graphs/test-graph.js: line 86, col 11, Missing semicolon.\n\n12 errors');
  });
});