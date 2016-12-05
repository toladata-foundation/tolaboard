import Ember from 'ember';
var Mixin = Ember.Mixin;
var A = Ember.A;
var tryInvoke = Ember.tryInvoke;

export default Mixin.create({

  init: function init() {
    this._super.apply(this, arguments);
    this.childComponents = new A();
  },

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);

    // If we are a top-level parent, we should start
    // the `didInsertParent` call chain, starting with ourselves
    if (!this.get('parentComponent')) {
      tryInvoke(this, 'didInsertParent');
      this._didInsert = true;
      this.invokeChildDidInsertHooks();
    }
  },

  willDestroyElement: function willDestroyElement() {

    // this wook will be called depth-first from the top-level component
    // since we must destroy childs first, the first parent will
    // be responsible for destroying the children. `this._didInsert` guards
    // that we don't redestroy already destroyed children
    if (this._didInsert) {
      this.destroySelfAndChildren();
    }

    this._super.apply(this, arguments);
  },

  invokeChildDidInsertHooks: function invokeChildDidInsertHooks() {
    this.childComponents.invoke('didInsertParent');
    this.childComponents.setEach('_didInsert', true);
    this.childComponents.invoke('invokeChildDidInsertHooks');
  },

  destroySelfAndChildren: function destroySelfAndChildren() {
    this.destroyChildren();
    tryInvoke(this, 'willDestroyParent');
    this._didInsert = false;
  },

  destroyChildren: function destroyChildren() {
    this.childComponents.reverseObjects();
    // if we have child-parents, destroy their children as well
    this.childComponents.invoke('destroyChildren');
    // destroy children
    this.childComponents.invoke('willDestroyParent');
    this.childComponents.setEach('_didInsert', false);
    this.childComponents.clear();
  },

  registerChild: function registerChild(childComponent) {
    this.childComponents.addObject(childComponent);

    // If parent already setup, setup child immediately
    if (this._didInsert) {
      tryInvoke(childComponent, 'didInsertParent');
      childComponent._didInsert = true;
      tryInvoke(childComponent, 'invokeChildDidInsertHooks');
    }
  },

  unregisterChild: function unregisterChild(childComponent) {
    this.childComponents.removeObject(childComponent);

    // If parent already setup, teardown child immediately
    if (childComponent._didInsert) {
      tryInvoke(childComponent, 'destroySelfAndChildren');
    }
  }
});