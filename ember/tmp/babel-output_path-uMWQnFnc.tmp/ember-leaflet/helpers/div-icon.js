define('ember-leaflet/helpers/div-icon', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.divIcon = divIcon;

  /* global L */

  var helper = _ember['default'].Helper.helper;

  function divIcon(_, hash) {
    return L.divIcon(hash);
  }

  exports['default'] = helper(divIcon);
});