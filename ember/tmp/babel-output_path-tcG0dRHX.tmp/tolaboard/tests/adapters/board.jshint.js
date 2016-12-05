define('tolaboard/tests/adapters/board.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/board.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/board.js should pass jshint.\nadapters/board.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/board.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/board.js: line 4, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nadapters/board.js: line 15, col 23, Missing semicolon.\n\n4 errors');
  });
});