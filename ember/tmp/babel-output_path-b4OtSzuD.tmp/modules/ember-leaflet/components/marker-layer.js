function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import Ember from 'ember';
import BaseLayer from 'ember-leaflet/components/base-layer';
import DraggabilityMixin from 'ember-leaflet/mixins/draggability';
import DivOverlayableMixin from 'ember-leaflet/mixins/div-overlayable';
import toLatLng from 'ember-leaflet/macros/to-lat-lng';
var observer = Ember.observer;

export default BaseLayer.extend(DraggabilityMixin, DivOverlayableMixin, {

  leafletRequiredOptions: ['location'],

  leafletOptions: ['icon', 'clickable', 'draggable', 'keyboard', 'title', 'alt', 'zIndexOffset', 'opacity', 'riseOnHover', 'riseOffset'],

  leafletEvents: ['click', 'dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu', 'dragstart', 'drag', 'dragend', 'move', 'remove', 'add', 'popupopen', 'popupclose'],

  leafletProperties: ['zIndexOffset', 'opacity', 'location:setLatLng'],

  location: toLatLng(),

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