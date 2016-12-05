define('ember-leaflet/helpers/icon', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.icon = icon;

  /* global L */

  var helper = _ember['default'].Helper.helper;

  function icon(_, hash) {
    return L.icon(hash);
  }

  exports['default'] = helper(icon);
});