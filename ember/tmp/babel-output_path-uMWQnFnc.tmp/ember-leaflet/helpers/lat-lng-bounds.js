define('ember-leaflet/helpers/lat-lng-bounds', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.latLngBounds = latLngBounds;

  /* global L */

  var helper = _ember['default'].Helper.helper;

  function latLngBounds(latLngs) {
    return L.latLngBounds(latLngs);
  }

  exports['default'] = helper(latLngBounds);
});