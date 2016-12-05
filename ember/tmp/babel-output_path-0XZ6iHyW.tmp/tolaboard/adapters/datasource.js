define('tolaboard/adapters/datasource', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].RESTAdapter.extend({
		// host: 'assets/data/data-sources2.json?jsonp=?',
		host: 'http://localhost:2021',
		namespace: 'api',
		pathForType: function pathForType(modelName) {
			console.log('pathForType in datasource adapter invoked');
			return 'data';
		},
		shouldReloadAll: function shouldReloadAll() {
			return true;
		}
	});
});