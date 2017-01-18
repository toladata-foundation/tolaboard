import Ember from 'ember';

export default Ember.Route.extend({

	// session: Ember.inject.service(),
	// beforeModel: function() {
	// 	var session = this.get('session');
	// 	if(session.isLoggedIn === false) {
	// 		this.transitionTo('login');
	// 	}
	// },
	model: function(params) {
		return this.store.findRecord('board-old', params.board_id);
	}
});
