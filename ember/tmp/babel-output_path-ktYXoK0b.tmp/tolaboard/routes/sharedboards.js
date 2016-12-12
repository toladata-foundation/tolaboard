define('tolaboard/routes/sharedboards', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({

		session: _ember['default'].inject.service(),
		beforeModel: function beforeModel() {
			var session = this.get('session');
			if (session.isLoggedIn === false) {
				this.transitionTo('login');
			}
		}
	});
});