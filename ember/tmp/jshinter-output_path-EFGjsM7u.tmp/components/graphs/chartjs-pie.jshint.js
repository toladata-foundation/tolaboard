QUnit.module('JSHint | components/graphs/chartjs-pie.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/graphs/chartjs-pie.js should pass jshint.\ncomponents/graphs/chartjs-pie.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/chartjs-pie.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
