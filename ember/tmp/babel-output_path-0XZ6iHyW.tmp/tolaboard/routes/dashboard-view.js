define('tolaboard/routes/dashboard-view', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({

		model: function model(params) {

			return this.store.findRecord('board', params.board_id);
		}
	});
});