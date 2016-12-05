define('tolaboard/adapters/silo', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    // host: 'assets/data/data-sources2.json?jsonp=?',
    host: 'http://localhost:2021',
    namespace: 'api',
    pathForType: function pathForType(modelName) {
      return 'data';
    },
    shouldReloadAll: function shouldReloadAll() {
      return true;
    }
  });
});