define('ember-leaflet/components/div-overlay-layer', ['exports', 'ember-leaflet/components/base-layer', 'ember-leaflet/templates/div-overlay', 'ember-composability-tools'], function (exports, _emberLeafletComponentsBaseLayer, _emberLeafletTemplatesDivOverlay, _emberComposabilityTools) {
  'use strict';

  exports['default'] = _emberLeafletComponentsBaseLayer['default'].extend(_emberComposabilityTools.RenderBlockMixin, {
    layout: _emberLeafletTemplatesDivOverlay['default'],

    leafletOptions: ['offset', 'className', 'pane']
  });
});