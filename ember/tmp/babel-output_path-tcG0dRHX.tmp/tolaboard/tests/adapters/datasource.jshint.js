define('tolaboard/tests/adapters/datasource.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/datasource.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/datasource.js should pass jshint.\nadapters/datasource.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/datasource.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/datasource.js: line 4, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nadapters/datasource.js: line 11, col 22, Missing semicolon.\n\n4 errors');
  });
});