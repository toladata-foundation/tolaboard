define('ember-composability-tools/mixins/render-block', ['exports', 'ember', 'ember-composability-tools/templates/render-block'], function (exports, _ember, _emberComposabilityToolsTemplatesRenderBlock) {
  'use strict';

  var Mixin = _ember['default'].Mixin;
  var computed = _ember['default'].computed;

  exports['default'] = Mixin.create({
    layout: _emberComposabilityToolsTemplatesRenderBlock['default'],

    destinationElementTag: 'div',

    // creates a document fragment that will hold the DOM
    destinationElement: computed(function () {
      return document.createElement(this.get('destinationElementTag'));
    })
  });
});