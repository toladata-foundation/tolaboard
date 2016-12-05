define('ember-leaflet/mixins/div-overlayable', ['exports', 'ember', 'ember-composability-tools', 'ember-leaflet/templates/div-overlayable'], function (exports, _ember, _emberComposabilityTools, _emberLeafletTemplatesDivOverlayable) {
  'use strict';

  var Mixin = _ember['default'].Mixin;

  exports['default'] = Mixin.create(_emberComposabilityTools.ParentMixin, _emberComposabilityTools.ChildMixin, {
    layout: _emberLeafletTemplatesDivOverlayable['default']
  });
});