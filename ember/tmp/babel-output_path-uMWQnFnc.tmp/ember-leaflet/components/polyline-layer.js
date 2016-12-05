define('ember-leaflet/components/polyline-layer', ['exports', 'ember-leaflet/components/array-path-layer'], function (exports, _emberLeafletComponentsArrayPathLayer) {
  'use strict';

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  exports['default'] = _emberLeafletComponentsArrayPathLayer['default'].extend({
    leafletOptions: ['smoothFactor', 'noClip'],

    createLayer: function createLayer() {
      var _L;

      return (_L = this.L).polyline.apply(_L, _toConsumableArray(this.get('requiredOptions')).concat([this.get('options')]));
    }
  });
});