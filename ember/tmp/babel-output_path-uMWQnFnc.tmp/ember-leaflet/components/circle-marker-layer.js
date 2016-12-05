define('ember-leaflet/components/circle-marker-layer', ['exports', 'ember-leaflet/components/point-path-layer'], function (exports, _emberLeafletComponentsPointPathLayer) {
  'use strict';

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  exports['default'] = _emberLeafletComponentsPointPathLayer['default'].extend({

    leafletOptions: ['radius'],

    leafletProperties: ['radius'],

    createLayer: function createLayer() {
      var _L;

      return (_L = this.L).circleMarker.apply(_L, _toConsumableArray(this.get('requiredOptions')).concat([this.get('options')]));
    }
  });
});