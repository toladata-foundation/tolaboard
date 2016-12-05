define('tolaboard/routes/datasources', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({

		/*session: Ember.inject.service(),
  beforeModel: function() {
  	console.log('beforeModel in application.js')
  	if(this.get('session').isLoggedIn === "false") {
  		this.transitionTo('login');
  	}
  }*/

		model: function model() {

			return this.store.findAll('datasource');
		}
	});
});