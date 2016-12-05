define('ember-leaflet/helpers/point', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.point = point;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  /* global L */

  var helper = _ember['default'].Helper.helper;

  function point(params) {
    var _L;

    return (_L = L).point.apply(_L, _toConsumableArray(params));
  }

  exports['default'] = helper(point);
});