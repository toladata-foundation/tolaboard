define('tolaboard/tests/components/graphs/leaflet-map.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/graphs/leaflet-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/graphs/leaflet-map.js should pass jshint.\ncomponents/graphs/leaflet-map.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/leaflet-map.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/graphs/leaflet-map.js: line 11, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/graphs/leaflet-map.js: line 16, col 33, [\'lat\'] is better written in dot notation.\ncomponents/graphs/leaflet-map.js: line 17, col 33, [\'lng\'] is better written in dot notation.\ncomponents/graphs/leaflet-map.js: line 25, col 73, Missing semicolon.\ncomponents/graphs/leaflet-map.js: line 26, col 73, Missing semicolon.\ncomponents/graphs/leaflet-map.js: line 27, col 11, Missing semicolon.\n\n8 errors');
  });
});