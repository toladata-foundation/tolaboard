export { divIcon };
import Ember from 'ember';
/* global L */

var helper = Ember.Helper.helper;

function divIcon(_, hash) {
  return L.divIcon(hash);
}

export default helper(divIcon);