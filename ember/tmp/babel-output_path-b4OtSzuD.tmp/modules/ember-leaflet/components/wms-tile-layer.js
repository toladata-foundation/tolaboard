function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import TileLayer from 'ember-leaflet/components/tile-layer';

export default TileLayer.extend({

  leafletOptions: ['layers', 'styles', 'format', 'transparent', 'version', 'crs'],

  createLayer: function createLayer() {
    var _L$tileLayer;

    return (_L$tileLayer = this.L.tileLayer).wms.apply(_L$tileLayer, _toConsumableArray(this.get('requiredOptions')).concat([this.get('options')]));
  }

});