define('tolaboard/adapters/board', ['exports', 'ember-data', 'tolaboard/config/environment'], function (exports, _emberData, _tolaboardConfigEnvironment) {
	exports['default'] = _emberData['default'].RESTAdapter.extend({
		/*
  host: "assets/data/tolaboards/collection-tolaboards.json?jsonp=?",	
  */

		// host: 'http://localhost:2021',	
		host: _tolaboardConfigEnvironment['default'].API.url,
		namespace: 'api',
		pathForType: function pathForType(modelName) {
			// console.log('pathForType in board adapter invoked')
			return 'board';
		},
		shouldReloadAll: function shouldReloadAll() {
			return true;
		}
	});
});