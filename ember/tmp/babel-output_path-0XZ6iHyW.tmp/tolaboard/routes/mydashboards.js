define('tolaboard/routes/mydashboards', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({

		session: _ember['default'].inject.service(),
		store: _ember['default'].inject.service()

	});
});
/*afterModel: function() {	
	this.set('ownerBoards', this.get('store').query('board', {policy: 'owner'}));
	this.set('sharedBoards', this.get('store').query('board', {policy: 'view'}));
	this.set('updateBoards', this.get('store').query('board', {policy: 'update'}));
}*/