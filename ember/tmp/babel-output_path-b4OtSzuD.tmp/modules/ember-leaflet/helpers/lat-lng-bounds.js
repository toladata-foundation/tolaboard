export { latLngBounds };
import Ember from 'ember';
/* global L */

var helper = Ember.Helper.helper;

function latLngBounds(latLngs) {
  return L.latLngBounds(latLngs);
}

export default helper(latLngBounds);