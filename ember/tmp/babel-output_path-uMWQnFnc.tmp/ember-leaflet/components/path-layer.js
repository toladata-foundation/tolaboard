define('ember-leaflet/components/path-layer', ['exports', 'ember-leaflet/components/base-layer', 'ember-leaflet/mixins/div-overlayable', 'ember-leaflet/mixins/style'], function (exports, _emberLeafletComponentsBaseLayer, _emberLeafletMixinsDivOverlayable, _emberLeafletMixinsStyle) {
  'use strict';

  exports['default'] = _emberLeafletComponentsBaseLayer['default'].extend(_emberLeafletMixinsDivOverlayable['default'], _emberLeafletMixinsStyle['default'], {

    leafletOptions: ['stroke', 'color', 'weight', 'opacity', 'fill', 'fillColor', 'fillOpacity', 'fillRule', 'dashArray', 'lineCap', 'lineJoin', 'clickable', 'pointerEvents', 'className'],

    leafletEvents: ['click', 'dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu', 'add', 'remove', 'popupopen', 'popupclose']
  });
});