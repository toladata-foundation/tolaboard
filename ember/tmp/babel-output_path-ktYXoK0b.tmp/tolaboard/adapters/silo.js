define('tolaboard/adapters/silo', ['exports', 'ember-data', 'tolaboard/config/environment'], function (exports, _emberData, _tolaboardConfigEnvironment) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    // host: 'assets/data/data-sources2.json?jsonp=?',
    // host: 'http://localhost:2021', 
    host: _tolaboardConfigEnvironment['default'].API.url,
    namespace: 'api',
    pathForType: function pathForType(modelName) {
      return 'data';
    },
    shouldReloadAll: function shouldReloadAll() {
      return true;
    }
  });
});