import Ember from 'ember';

export default Ember.Route.extend({

	

	/*session: Ember.inject.service(),
	beforeModel: function() {
		console.log('beforeModel in application.js')
		if(this.get('session').isLoggedIn === "false") {
			this.transitionTo('login');
		}
	}*/

	model: function() {

		return this.store.findAll('datasource');
	}
});
