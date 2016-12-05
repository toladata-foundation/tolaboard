function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import PolylineLayer from 'ember-leaflet/components/polyline-layer';

export default PolylineLayer.extend({
  createLayer: function createLayer() {
    var _L;

    return (_L = this.L).polygon.apply(_L, _toConsumableArray(this.get('requiredOptions')).concat([this.get('options')]));
  }
});