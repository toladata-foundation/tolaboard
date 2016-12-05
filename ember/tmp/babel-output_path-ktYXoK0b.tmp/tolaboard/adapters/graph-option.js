define('tolaboard/adapters/graph-option', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].RESTAdapter.extend({
		host: 'assets/data/graph-options.json?jsonp=?',
		shouldReloadAll: function shouldReloadAll() {
			return true;
		}
	});
});