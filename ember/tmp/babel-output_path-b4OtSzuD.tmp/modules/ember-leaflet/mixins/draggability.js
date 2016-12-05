import Ember from 'ember';
var Mixin = Ember.Mixin;
var observer = Ember.observer;

export default Mixin.create({

  draggableDidChange: observer('draggable', function () {
    if (this.get('draggable')) {
      this._layer.dragging.enable();
    } else {
      this._layer.dragging.disable();
    }
  })

});