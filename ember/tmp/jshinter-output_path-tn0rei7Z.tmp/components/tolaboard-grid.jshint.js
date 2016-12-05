QUnit.module('JSHint | components/tolaboard-grid.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/tolaboard-grid.js should pass jshint.\ncomponents/tolaboard-grid.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/tolaboard-grid.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/tolaboard-grid.js: line 22, col 71, [\'size_x\'] is better written in dot notation.\ncomponents/tolaboard-grid.js: line 22, col 84, [\'size_y\'] is better written in dot notation.\ncomponents/tolaboard-grid.js: line 22, col 97, [\'col\'] is better written in dot notation.\ncomponents/tolaboard-grid.js: line 22, col 107, [\'row\'] is better written in dot notation.\n\n6 errors');
});
