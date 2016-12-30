import Ember from 'ember';

export default Ember.Controller.extend({	

	/* needs fixed to show the board when it's defined by the persisted data */
	showDesigner: false,	

	actions: {

		/* several things possible:
		1. Nothing present, show designer		
		2. Already in-process of new board, prompt, save, clear, new board
		3. Already in-process of existing board, ditto above

		*/
		toggleNewBoard: function() { 
			
			this.toggleProperty('showDesigner');
		}
	}
});
