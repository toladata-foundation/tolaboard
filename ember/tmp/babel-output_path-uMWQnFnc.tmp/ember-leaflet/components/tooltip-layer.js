define('ember-leaflet/components/tooltip-layer', ['exports', 'ember', 'ember-leaflet/components/div-overlay-layer'], function (exports, _ember, _emberLeafletComponentsDivOverlayLayer) {
  'use strict';

  var run = _ember['default'].run;
  var computed = _ember['default'].computed;

  exports['default'] = _emberLeafletComponentsDivOverlayLayer['default'].extend({

    leafletOptions: ['direction', 'permanent', 'sticky', 'interactive', 'opacity'],

    // if this tooltip is permanent, we need to render the content immediately
    shouldRender: computed.reads('permanent'),

    createLayer: function createLayer() {
      return this.L.tooltip(this.get('options')).setContent(this.get('destinationElement'));
    },

    didCreateLayer: function didCreateLayer() {
      this._addPopupListeners();
    },

    willDestroyLayer: function willDestroyLayer() {
      this._removePopupListeners();
    },

    addToContainer: function addToContainer() {
      this.get('parentComponent')._layer.bindTooltip(this._layer);
    },

    removeFromContainer: function removeFromContainer() {
      this.get('parentComponent')._layer.unbindTooltip();
    },

    _onLayerRemove: function _onLayerRemove(_ref) {
      var layer = _ref.layer;

      if (layer === this._layer) {
        this.set('shouldRender', false);
      }
    },

    _addPopupListeners: function _addPopupListeners() {
      var _this = this;

      // we need to hijack the `onAdd` method because we need to
      // render the template *before* the popup is opened.
      // This way, the popup will set its dimensions according to the rendered DOM.
      var oldOnAdd = this._layer.onAdd;
      this._layer.onAdd = function (map) {
        // trigger _initLayout manually, otherwise Tooltip doesn't have the container set
        // to calculate initial position
        if (!_this._layer._container) {
          _this._layer._initLayout();
        }
        // this will make wormwhole render to the document fragment
        _this.set('shouldRender', true);
        // ember-wormhole will render on the afterRender queue, so we need to render after that
        run.next(function () {
          oldOnAdd.call(_this._layer, map);
        });
      };
      // we need to user `layerremove` event becase it's the only one that fires
      // *after* the popup was completely removed from the map
      var parentComponent = this.get('parentComponent');
      parentComponent._layer._map.addEventListener('layerremove', this._onLayerRemove, this);
    },

    _removePopupListeners: function _removePopupListeners() {
      var parentComponent = this.get('parentComponent');
      parentComponent._layer._map.removeEventListener('layerremove', this._onLayerRemove, this);
    }
  });
});