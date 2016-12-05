export { point };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import Ember from 'ember';
/* global L */

var helper = Ember.Helper.helper;

function point(params) {
  var _L;

  return (_L = L).point.apply(_L, _toConsumableArray(params));
}

export default helper(point);