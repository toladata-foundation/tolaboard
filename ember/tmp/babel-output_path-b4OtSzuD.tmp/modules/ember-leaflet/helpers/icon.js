export { icon };
import Ember from 'ember';
/* global L */

var helper = Ember.Helper.helper;

function icon(_, hash) {
  return L.icon(hash);
}

export default helper(icon);