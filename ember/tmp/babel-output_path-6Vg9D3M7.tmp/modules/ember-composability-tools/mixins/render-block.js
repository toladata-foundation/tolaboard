import Ember from 'ember';
import layout from '../templates/render-block';

var Mixin = Ember.Mixin;
var computed = Ember.computed;

export default Mixin.create({
  layout: layout,

  destinationElementTag: 'div',

  // creates a document fragment that will hold the DOM
  destinationElement: computed(function () {
    return document.createElement(this.get('destinationElementTag'));
  })
});