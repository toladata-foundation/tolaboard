define('ember-leaflet/components/polygon-layer', ['exports', 'ember-leaflet/components/polyline-layer'], function (exports, _emberLeafletComponentsPolylineLayer) {
  'use strict';

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  exports['default'] = _emberLeafletComponentsPolylineLayer['default'].extend({
    createLayer: function createLayer() {
      var _L;

      return (_L = this.L).polygon.apply(_L, _toConsumableArray(this.get('requiredOptions')).concat([this.get('options')]));
    }
  });
});