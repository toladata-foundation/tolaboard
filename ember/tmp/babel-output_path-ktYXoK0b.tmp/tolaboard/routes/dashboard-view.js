define('tolaboard/routes/dashboard-view', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({

		session: _ember['default'].inject.service(),
		beforeModel: function beforeModel() {
			var session = this.get('session');
			if (session.isLoggedIn === false) {
				this.transitionTo('login');
			}
		},
		model: function model(params) {
			return this.store.findRecord('board', params.board_id);
		}
	});
});