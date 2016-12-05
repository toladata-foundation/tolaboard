define('ember-leaflet/components/image-layer', ['exports', 'ember-leaflet/components/base-layer'], function (exports, _emberLeafletComponentsBaseLayer) {
  'use strict';

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  exports['default'] = _emberLeafletComponentsBaseLayer['default'].extend({

    leafletRequiredOptions: ['imageUrl', 'bounds'],

    leafletOptions: ['attribution', 'opacity'],

    leafletProperties: ['url', 'opacity'],

    createLayer: function createLayer() {
      var _L;

      return (_L = this.L).imageOverlay.apply(_L, _toConsumableArray(this.get('requiredOptions')).concat([this.get('options')]));
    }
  });
});