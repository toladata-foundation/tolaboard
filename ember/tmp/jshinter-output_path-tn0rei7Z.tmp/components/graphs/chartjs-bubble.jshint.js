QUnit.module('JSHint | components/graphs/chartjs-bubble.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/graphs/chartjs-bubble.js should pass jshint.\ncomponents/graphs/chartjs-bubble.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/chartjs-bubble.js: line 20, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/chartjs-bubble.js: line 37, col 65, Missing semicolon.\ncomponents/graphs/chartjs-bubble.js: line 38, col 66, Missing semicolon.\ncomponents/graphs/chartjs-bubble.js: line 90, col 48, Missing semicolon.\ncomponents/graphs/chartjs-bubble.js: line 102, col 14, Missing semicolon.\ncomponents/graphs/chartjs-bubble.js: line 111, col 11, Missing semicolon.\n\n7 errors');
});
