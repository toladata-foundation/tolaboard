define('ember-leaflet/components/popup-layer', ['exports', 'ember', 'ember-leaflet/components/div-overlay-layer'], function (exports, _ember, _emberLeafletComponentsDivOverlayLayer) {
  'use strict';

  var observer = _ember['default'].observer;
  var run = _ember['default'].run;

  exports['default'] = _emberLeafletComponentsDivOverlayLayer['default'].extend({

    leafletOptions: ['maxWidth', 'minWidth', 'maxHeight', 'autoPan', 'autoPanPaddingTopLeft', 'autoPanPaddingBottomRight', 'autoPanPadding', 'keepInView', 'closeButton', 'autoClose'],

    isOpen: function isOpen() {
      // leaflet 1 added an `isOpen` method
      return this._layer.isOpen ? this._layer.isOpen() : this._layer._isOpen;
    },

    /*
     * Action to yield to block
     */
    closePopup: function closePopup() {
      this._layer._close();
    },

    popupOpenDidChange: observer('popupOpen', function () {
      if (this.get('popupOpen')) {
        if (!this.isOpen()) {
          this.get('parentComponent')._layer.openPopup();
        }
      } else {
        if (this.isOpen()) {
          this.get('parentComponent')._layer.closePopup();
        }
      }
    }),

    init: function init() {
      this._super.apply(this, arguments);
      // Fix for starting popup open
      if (this.get('popupOpen')) {
        this.set('shouldRender', true);
      }
    },

    createLayer: function createLayer() {
      return this.L.popup(this.get('options')).setContent(this.get('destinationElement'));
    },

    didCreateLayer: function didCreateLayer() {
      this._addPopupListeners();
      this.popupOpenDidChange();
    },

    willDestroyLayer: function willDestroyLayer() {
      this._removePopupListeners();
      this.closePopup();
    },

    addToContainer: function addToContainer() {
      this.get('parentComponent')._layer.bindPopup(this._layer);
    },

    removeFromContainer: function removeFromContainer() {
      this.get('parentComponent')._layer.unbindPopup();
    },

    _onLayerRemove: function _onLayerRemove(_ref) {
      var _this = this;

      var layer = _ref.layer;

      if (layer === this._layer) {
        if (this.get('parentComponent')._layer._map._fadeAnimated) {
          this._destroyAfterAnimation = run.later(function () {
            if (!_this.get('isDestroyed') && !_this.get('isDestroying')) {
              _this.set('shouldRender', false);
            }
          }, 200);
        } else {
          this.set('shouldRender', false);
        }
      }
    },

    _addPopupListeners: function _addPopupListeners() {
      var _this2 = this;

      // we need to hijack the `onAdd` method because we need to
      // render the template *before* the popup is opened.
      // This way, the popup will set its dimensions according to the rendered DOM.
      var oldOnAdd = this._layer.onAdd;
      this._layer.onAdd = function (map) {
        // if we're currently waiting for the animation to end, cancel the wait
        run.cancel(_this2._destroyAfterAnimation);
        // this will make wormwhole render to the document fragment
        _this2.set('shouldRender', true);
        // ember-wormhole will render on the afterRender queue, so we need to render after that
        run.next(function () {
          oldOnAdd.call(_this2._layer, map);
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