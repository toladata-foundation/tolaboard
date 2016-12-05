import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({	
	// host: 'assets/data/data-sources2.json?jsonp=?',
	// host: 'http://localhost:2021',	
	host: ENV.API.url,
	namespace: 'api',
	pathForType: function(modelName) {
		// console.log('pathForType in datasource adapter invoked')
		return 'data'
	},
	shouldReloadAll: function() {
		return true; 
	}
});

