QUnit.module('JSHint | components/graphs/chartjs-pie.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/graphs/chartjs-pie.js should pass jshint.\ncomponents/graphs/chartjs-pie.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/chartjs-pie.js: line 20, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/chartjs-pie.js: line 37, col 65, Missing semicolon.\ncomponents/graphs/chartjs-pie.js: line 38, col 66, Missing semicolon.\ncomponents/graphs/chartjs-pie.js: line 76, col 48, Missing semicolon.\ncomponents/graphs/chartjs-pie.js: line 86, col 46, Missing semicolon.\ncomponents/graphs/chartjs-pie.js: line 90, col 11, Missing semicolon.\n\n7 errors');
});
