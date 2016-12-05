QUnit.module('JSHint | components/tolaboard-designer.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/tolaboard-designer.js should pass jshint.\ncomponents/tolaboard-designer.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/tolaboard-designer.js: line 8, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
