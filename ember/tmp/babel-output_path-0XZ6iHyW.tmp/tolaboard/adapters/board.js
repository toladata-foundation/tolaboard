define('tolaboard/adapters/board', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].RESTAdapter.extend({
		/*
  	
  */
		/*host: "assets/data/tolaboards/collection-tolaboards.json?jsonp=?",
  shouldReloadAll: function() { 		
  	return true; 
  }*/
		host: 'http://localhost:2021',
		namespace: 'api',
		pathForType: function pathForType(modelName) {
			console.log('pathForType in board adapter invoked');
			return 'board';
		},
		shouldReloadAll: function shouldReloadAll() {
			return true;
		}
	});
});