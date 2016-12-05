define('tolaboard/tests/serializers/silo.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | serializers/silo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/silo.js should pass jshint.\nserializers/silo.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nserializers/silo.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});