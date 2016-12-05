import Ember from 'ember';
import ParentMixin from './parent';
var Mixin = Ember.Mixin;
var computed = Ember.computed;
var assert = Ember.assert;
var tryInvoke = Ember.tryInvoke;

export default Mixin.create({

  // This is intended as an escape hatch, but ideally you would
  // `{{yield` a a child contextual component with `parentComponent=this`
  parentComponent: computed(function () {
    return this.nearestOfType(ParentMixin);
  }),

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    this.registerWithParent();
  },

  willDestroyElement: function willDestroyElement() {
    this._super.apply(this, arguments);
    this.unregisterWithParent();
  },

  destroySelfAndChildren: function destroySelfAndChildren() {
    tryInvoke(this, 'willDestroyParent');
    this._didInsert = false;
  },

  registerWithParent: function registerWithParent() {
    var parentComponent = this.get('parentComponent');
    assert('Tried to use ' + this + ' outside the context of a parent component.', parentComponent);
    parentComponent.registerChild(this);
  },

  unregisterWithParent: function unregisterWithParent() {
    var parentComponent = this.get('parentComponent');
    if (parentComponent) {
      parentComponent.unregisterChild(this);
    }
  }

});