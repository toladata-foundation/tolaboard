define('tolaboard/tests/serializers/board.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | serializers/board.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/board.js should pass jshint.\nserializers/board.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nserializers/board.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});