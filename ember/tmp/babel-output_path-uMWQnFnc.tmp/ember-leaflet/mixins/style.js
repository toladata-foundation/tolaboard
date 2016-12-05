define('ember-leaflet/mixins/style', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }

  var Mixin = _ember['default'].Mixin;

  exports['default'] = Mixin.create({

    leafletStyleProperties: ['stroke', 'color', 'weight', 'opacity', 'fill', 'fillColor', 'fillOpacity', 'fillRule', 'dashArray', 'lineCap', 'lineJoin', 'clickable', 'pointerEvents', 'className'],

    didInsertParent: function didInsertParent() {
      this._super.apply(this, arguments);
      this._addStyleObservers();
    },

    willDestroyParent: function willDestroyParent() {
      this._removeStyleObservers();
      this._super.apply(this, arguments);
    },

    _addStyleObservers: function _addStyleObservers() {
      this._styleObservers = {};
      this.get('leafletStyleProperties').forEach(function (property) {

        this._styleObservers[property] = function () {
          var value = this.get(property);
          this._layer.setStyle(_defineProperty({}, property, value));
        };

        this.addObserver(property, this, this._styleObservers[property]);
      }, this);
    },

    _removeStyleObservers: function _removeStyleObservers() {
      this.get('leafletStyleProperties').forEach(function (property) {
        this.removeObserver(property, this, this._styleObservers[property]);
        delete this._styleObservers[property];
      }, this);
    }

  });
});