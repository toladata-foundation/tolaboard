define('tolaboard/tests/components/graphs/leaflet-map.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/graphs/leaflet-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/graphs/leaflet-map.js should pass jshint.\ncomponents/graphs/leaflet-map.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/leaflet-map.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});