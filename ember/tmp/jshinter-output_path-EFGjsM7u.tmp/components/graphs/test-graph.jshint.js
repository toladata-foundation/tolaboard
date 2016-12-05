QUnit.module('JSHint | components/graphs/test-graph.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/graphs/test-graph.js should pass jshint.\ncomponents/graphs/test-graph.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/test-graph.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
