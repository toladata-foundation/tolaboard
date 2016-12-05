function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import ArrayPathLayer from 'ember-leaflet/components/array-path-layer';

export default ArrayPathLayer.extend({
  leafletOptions: ['smoothFactor', 'noClip'],

  createLayer: function createLayer() {
    var _L;

    return (_L = this.L).polyline.apply(_L, _toConsumableArray(this.get('requiredOptions')).concat([this.get('options')]));
  }
});