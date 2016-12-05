define('tolaboard/controllers/dashboards', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		showDesigner: false,

		actions: {

			/* several things possible:
   1. Nothing present, show designer		
   2. Already in-process of new board, prompt, save, clear, new board
   3. Already in-process of existing board, ditto above
   	*/
			toggleNewBoard: function toggleNewBoard() {

				this.toggleProperty('showDesigner');
			}
		}
	});
});