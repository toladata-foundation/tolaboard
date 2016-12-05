define('tolaboard/initializers/leaflet-assets', ['exports', 'tolaboard/config/environment'], function (exports, _tolaboardConfigEnvironment) {
  exports.initialize = initialize;

  /* global L */

  function initialize() /* container, application */{
    L.Icon.Default.imagePath = (_tolaboardConfigEnvironment['default'].rootURL || _tolaboardConfigEnvironment['default'].baseURL || '/') + 'assets/images/';
  }

  exports['default'] = {
    name: 'leaflet-assets',
    initialize: initialize
  };
});