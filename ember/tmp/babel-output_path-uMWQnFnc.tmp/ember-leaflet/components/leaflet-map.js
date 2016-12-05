define('ember-leaflet/components/leaflet-map', ['exports', 'ember', 'ember-leaflet/components/base-layer', 'ember-composability-tools', 'ember-leaflet/macros/to-lat-lng', 'ember-leaflet/templates/leaflet-map'], function (exports, _ember, _emberLeafletComponentsBaseLayer, _emberComposabilityTools, _emberLeafletMacrosToLatLng, _emberLeafletTemplatesLeafletMap) {
  'use strict';

  var assert = _ember['default'].assert;

  var assign = _ember['default'].assign || _ember['default'].merge;

  exports['default'] = _emberLeafletComponentsBaseLayer['default'].extend(_emberComposabilityTools.ParentMixin, {
    tagName: 'div',
    layout: _emberLeafletTemplatesLeafletMap['default'],

    leafletOptions: [
    // Map state options
    'center', 'zoom', 'minZoom', 'maxZoom', 'maxBounds', 'crs',
    // Interaction options
    'dragging', 'touchZoom', 'scrollWheelZoom', 'doubleClickZoom', 'boxZoom', 'tap', 'tapTolerance', 'trackResize', 'worldCopyJump', 'closePopupOnClick', 'bounceAtZoomLimits',
    // Keyboard navigation options
    'keyboard', 'keyboardPanOffset', 'keyboardZoomOffset',
    // Panning Inertia Options
    'inertia', 'inertiaDeceleration', 'inertiaMaxSpeed', 'inertiaThreshold',
    // Control options
    'zoomControl', 'attributionControl',
    // Animation options
    'fadeAnimation', 'zoomAnimation', 'zoomAnimationThreshold', 'markerZoomAnimation'],

    // Events this map can respond to.
    leafletEvents: ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'contextmenu', 'focus', 'blur', 'preclick', 'load', 'unload', 'viewreset', 'movestart', 'move', 'moveend', 'dragstart', 'drag', 'dragend', 'zoomstart', 'zoomend', 'zoomlevelschange', 'resize', 'autopanstart', 'layeradd', 'layerremove', 'baselayerchange', 'overlayadd', 'overlayremove', 'locationfound', 'locationerror', 'popupopen', 'popupclose'],

    leafletProperties: ['zoom:setZoom:zoomPanOptions', 'center:panTo:zoomPanOptions', 'maxBounds:setMaxBounds', 'bounds:fitBounds:fitBoundsOptions'],

    center: (0, _emberLeafletMacrosToLatLng['default'])(),

    // By default all layers try to register in a container layer.
    // It is not the case of the map itself as it is the topmost container.
    registerWithParent: function registerWithParent() {},
    unregisterWithParent: function unregisterWithParent() {},

    createLayer: function createLayer() {
      var options = this.get('options');

      // Don't set center and zoom right now.
      // Let base layer bind the events first
      delete options.center;
      delete options.zoom;
      return this.L.map(this.element, options);
    },

    // Manually call `remove` method in the case of the root map layer.
    willDestroyParent: function willDestroyParent() {
      var layer = this._layer;
      this._super.apply(this, arguments);
      layer.remove();
    },

    didCreateLayer: function didCreateLayer() {
      //after base layer bound the events, we can now set the map's view
      assert('You must provide either valid `bounds` or a `center` (or `lat`/`lng`) and a `zoom` value.', this.get('bounds') && !this.get('center') && this.get('zoom') === undefined || !this.get('bounds') && this.get('center') && this.get('zoom') !== undefined);
      if (this.get('bounds')) {
        this._layer.fitBounds(this.get('bounds'), assign({ reset: true }, this.get('fitBoundsOptions')));
      } else {

        this._layer.setView(this.get('center'), this.get('zoom'), assign({ reset: true }, this.get('zoomPanOptions')));
      }
    }
  });
});