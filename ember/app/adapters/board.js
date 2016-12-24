/* Help with adapters... 
https://www.emberscreencasts.com/posts/110-ember-data-20-essential-adapter-customizations
*/
import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
	/*
	host: "assets/data/tolaboards/collection-tolaboards.json?jsonp=?",	
	*/
	
	
	// host: 'http://localhost:2021',	
	host: ENV.API.url,
	namespace: 'api',
	pathForType: function(modelName) {
		// console.log('pathForType in board adapter invoked')
		return 'board'
	},
	shouldReloadAll: function() { 		
		return true; 
	}
});
