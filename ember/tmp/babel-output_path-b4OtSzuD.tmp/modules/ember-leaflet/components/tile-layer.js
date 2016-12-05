function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import BaseLayer from 'ember-leaflet/components/base-layer';

export default BaseLayer.extend({

  leafletRequiredOptions: ['url'],

  leafletOptions: ['minZoom', 'maxZoom', 'maxNativeZoom', 'tileSize', 'subdomains', 'errorTileUrl', 'attribution', 'tms', 'continuousWorld', 'noWrap', 'zoomOffset', 'zoomReverse', 'opacity', 'zIndex', 'unloadInvisibleTiles', 'updateWhenIdle', 'detectRetina', 'reuseTiles', 'bounds'],

  leafletEvents: ['loading', 'load', 'tileloadstart', 'tileload', 'tileunload'],

  leafletProperties: ['url', 'zIndex', 'opacity'],

  createLayer: function createLayer() {
    var _L;

    return (_L = this.L).tileLayer.apply(_L, _toConsumableArray(this.get('requiredOptions')).concat([this.get('options')]));
  }
});