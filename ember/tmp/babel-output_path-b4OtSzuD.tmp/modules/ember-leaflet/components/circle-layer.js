function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import PointPathLayer from 'ember-leaflet/components/point-path-layer';

export default PointPathLayer.extend({

  leafletRequiredOptions: ['radius'],

  leafletProperties: ['radius'],

  createLayer: function createLayer() {
    var _L;

    return (_L = this.L).circle.apply(_L, _toConsumableArray(this.get('requiredOptions')).concat([this.get('options')]));
  }
});