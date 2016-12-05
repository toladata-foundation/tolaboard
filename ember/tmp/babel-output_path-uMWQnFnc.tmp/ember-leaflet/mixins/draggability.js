define('ember-leaflet/mixins/draggability', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var Mixin = _ember['default'].Mixin;
  var observer = _ember['default'].observer;

  exports['default'] = Mixin.create({

    draggableDidChange: observer('draggable', function () {
      if (this.get('draggable')) {
        this._layer.dragging.enable();
      } else {
        this._layer.dragging.disable();
      }
    })

  });
});