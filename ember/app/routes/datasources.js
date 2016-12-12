import Ember from 'ember';

export default Ember.Route.extend({

	session: Ember.inject.service(),
	beforeModel: function() {		
		var session = this.get('session');
		if(session.isLoggedIn === false) {
			this.transitionTo('login');
		}
	},	
	model: function() {
		return this.store.findAll('datasource');
	}
});
