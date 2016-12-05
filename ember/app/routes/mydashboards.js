import Ember from 'ember';

export default Ember.Route.extend({
	
	session: Ember.inject.service(),
	store: Ember.inject.service(),

	
	/*afterModel: function() {	
		this.set('ownerBoards', this.get('store').query('board', {policy: 'owner'}));
		this.set('sharedBoards', this.get('store').query('board', {policy: 'view'}));
		this.set('updateBoards', this.get('store').query('board', {policy: 'update'}));
	}*/
});
