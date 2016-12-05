function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import BaseLayer from 'ember-leaflet/components/base-layer';
import StyleMixin from 'ember-leaflet/mixins/style';
import DivOverlayableMixin from 'ember-leaflet/mixins/div-overlayable';

/**
 * An ember-leaflet wrapper for L.geoJson, which renders GeoJson data onto a
 * map as features.
 *
 * Takes:
 *   - geoJSON: the GeoJSON object to render
 *   - all standard leaflet options for L.geoJson
 */
export default BaseLayer.extend(DivOverlayableMixin, StyleMixin, {
  leafletRequiredOptions: ['geoJSON'],

  leafletOptions: ['stroke', 'color', 'weight', 'opacity', 'fill', 'fillColor', 'fillOpacity', 'fillRule', 'dashArray', 'lineCap', 'lineJoin', 'clickable', 'pointerEvents', 'className', 'pointToLayer', 'style', 'onEachFeature', 'filter', 'coordsToLatLng'],

  leafletEvents: ['click', 'dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu', 'add', 'remove', 'popupopen', 'popupclose'],

  didUpdateAttrs: function didUpdateAttrs(_ref) {
    var newAttrs = _ref.newAttrs;

    if (newAttrs.geoJSON) {
      this.pushDataToLeaflet(newAttrs.geoJSON.value);
    }
  },

  pushDataToLeaflet: function pushDataToLeaflet(geoJSON) {
    if (!this._layer) {
      return;
    }

    //recall that GeoJSON layers are actually layer groups -- we have to clear
    //their contents first...
    this._layer.clearLayers();

    if (geoJSON) {
      //...then add new data to recreate the child layers in an updated form
      this._layer.addData(geoJSON);
    }
  },

  createLayer: function createLayer() {
    var _L;

    return (_L = this.L).geoJson.apply(_L, _toConsumableArray(this.get('requiredOptions')).concat([this.get('options')]));
  }
});