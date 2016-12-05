function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Ember from 'ember';
var computed = Ember.computed;

export default function () {
  var latKey = arguments.length <= 0 || arguments[0] === undefined ? 'lat' : arguments[0];
  var lngKey = arguments.length <= 1 || arguments[1] === undefined ? 'lng' : arguments[1];

  return computed(latKey, lngKey, {
    get: function get() {
      var lat = this.get(latKey);
      var lng = this.get(lngKey);

      return this.L.latLng(lat, lng);
    },
    set: function set(key, value) {
      var _setProperties;

      this.setProperties((_setProperties = {}, _defineProperty(_setProperties, latKey, value ? value.lat : value), _defineProperty(_setProperties, lngKey, value ? value.lng : value), _setProperties));
      return value;
    }
  });
}