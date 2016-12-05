define('ember-leaflet/components/marker-layer', ['exports', 'ember', 'ember-leaflet/components/base-layer', 'ember-leaflet/mixins/draggability', 'ember-leaflet/mixins/div-overlayable', 'ember-leaflet/macros/to-lat-lng'], function (exports, _ember, _emberLeafletComponentsBaseLayer, _emberLeafletMixinsDraggability, _emberLeafletMixinsDivOverlayable, _emberLeafletMacrosToLatLng) {
  'use strict';

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var observer = _ember['default'].observer;

  exports['default'] = _emberLeafletComponentsBaseLayer['default'].extend(_emberLeafletMixinsDraggability['default'], _emberLeafletMixinsDivOverlayable['default'], {

    leafletRequiredOptions: ['location'],

    leafletOptions: ['icon', 'clickable', 'draggable', 'keyboard', 'title', 'alt', 'zIndexOffset', 'opacity', 'riseOnHover', 'riseOffset'],

    leafletEvents: ['click', 'dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu', 'dragstart', 'drag', 'dragend', 'move', 'remove', 'add', 'popupopen', 'popupclose'],

    leafletProperties: ['zIndexOffset', 'opacity', 'location:setLatLng'],

    location: (0, _emberLeafletMacrosToLatLng['default'])(),

    createLayer: function createLayer() {
      var _L;

      return (_L = this.L).marker.apply(_L, _toConsumableArray(this.get('requiredOptions')).concat([this.get('options')]));
    },

    // icon observer separated from generated (leaflet properties) due to a
    // leaflet bug where draggability is lost on icon change
    iconDidChange: observer('icon', function () {
      this._layer.setIcon(this.get('icon'));

      if (this.get('draggable')) {
        this._layer.dragging.enable();
      } else {
        this._layer.dragging.disable();
      }
    })
  });
});