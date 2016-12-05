import Ember from 'ember';
import { ParentMixin, ChildMixin } from 'ember-composability-tools';
import layout from '../templates/div-overlayable';

var Mixin = Ember.Mixin;

export default Mixin.create(ParentMixin, ChildMixin, {
  layout: layout
});