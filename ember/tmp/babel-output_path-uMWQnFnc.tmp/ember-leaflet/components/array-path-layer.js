define('ember-leaflet/components/array-path-layer', ['exports', 'ember-leaflet/components/path-layer'], function (exports, _emberLeafletComponentsPathLayer) {
  'use strict';

  exports['default'] = _emberLeafletComponentsPathLayer['default'].extend({

    leafletRequiredOptions: ['locations'],

    leafletProperties: ['locations.[]:setLatLngs']
  });
});