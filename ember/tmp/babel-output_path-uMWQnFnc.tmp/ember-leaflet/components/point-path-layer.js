define('ember-leaflet/components/point-path-layer', ['exports', 'ember-leaflet/components/path-layer', 'ember-leaflet/macros/to-lat-lng'], function (exports, _emberLeafletComponentsPathLayer, _emberLeafletMacrosToLatLng) {
  'use strict';

  exports['default'] = _emberLeafletComponentsPathLayer['default'].extend({

    leafletRequiredOptions: ['location'],

    leafletProperties: ['location:setLatLng'],

    location: (0, _emberLeafletMacrosToLatLng['default'])()
  });
});