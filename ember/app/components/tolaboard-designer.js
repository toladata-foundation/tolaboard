import Ember from 'ember';

export default Ember.Component.extend({

	store: Ember.inject.service(),
	dataAgg: Ember.inject.service('data-aggregator'),

	/* fires when tolaboard-designer.hbs has loaded */
	didRender() {
		console.log('didRender on tbd',this);
	},
	didInsertElement() {
		console.log('tb-designer object',this);



		// see if model contains valid tolaboard
		// MODEL HASN'T RETURNED BEFORE VIEW RENDERED AND THIS METHOD RUN
		// WE NEED MODEL TO BE AVAILABLE FIRST


		// console.log('tolaboard via model',this.get('tolaboard'));


		/*var foo = TBoard.create();
		console.log('new tboard',foo);*/
	},

	/*didInsertElement: function() {
		console.log('model passed to layout component',this.get('model'));

		// new tolaboard
		var tBoard = Tolaboard.create();
		console.log('new tBoard',tBoard);

	},*/

	willDestroyElement() {
		// console.log('will destroy in layout called');
	},

	/* Next section (prior to actions) contains methods for persisting tolaboard

	   saveTolaBoard - called from action updateSaveTolaBoard
	   getSerializedWidgets - get JSON serialization of gridster
	   getSerializedGraphs - ditto but for tolagraphs
	*/
	saveTolaBoard() {
		/*console.log('serialize and persist tolaboard');
		console.log(this.getSerializedWidgets());*/
		},

	actions: {
		createNewBoard() {
			// check state to see if we're already in current or new board

			// if nothing, create new board object, assign to model, ie currBoard
			var currBoard = TBoard.create();
			this.set('currBoard',currBoard);

			// show board design window
			this.set('showGridLayout',true);

			// if new or existing exists, prompt, save, wipe out and call createNewBoard
		},

		onAddItem() {
			// wrap this in a try throw catch
			// seems like an error occurs and prevents the full api from running
			// we need this to be atomic
			/* */
			// console.log('tb designer this',this);
			// console.log(this.get('model'));
			/* if the dynamic segment for the route is 'new', then
			   we have an emplty dashboard, with no items. Need to have items
			   be an empty array in this case*/
			/*var obj = Ember.Object.create({
					"widget": Ember.Object.create({"col":1,"row":1,"size_x":2,"size_y":2}),
					"graph":  Ember.Object.create({})
				});*/

				// var obj = Ember.Object.create({
				// 	"widget": {"col":1,"row":1,"size_x":2,"size_y":2},
				// 	"graph":  Ember.Object.create({})
				// });


			// push new dashboard item into model.items
			// this.get('model').get('items').pushObject(itemObj);

			/* the trick with adding a new widget is that we don't know where gridster
			   will place it... usually position (1,1) is taken. You could attempt to
				 figure it out, or just drop a default in at 1,1, size 2x2, and then look
				 and see where gridster actually placed it. Then update the store before
				 persisting. */
			// didCreate() in item model fires when this runs to update gridster props
			var newItem = this.get('store').createRecord('item', {
				board: this.get('model'),
		    title: this.get('model').get('title')+'-item-'+this.get('model').get('items').length,
		    widgetcol: 1,
		    widgetrow: 1,
		    widgetsizex: 2,
		    widgetsizey: 2,
			});



			// newItem.set('widgetcol', newWidget.col);
			// newItem.set('widgetrow', newWidget.row);
			// newItem.set('widgetsizex', newWidget.size_x);
			// newItem.set('widgetsizey', newWidget.size_y);

			newItem.save();

			// since we pushed an element to the UI, we need to update underlying
			// tbConfigItem object
			// var newIndxex = this.get('model').get('items').length-1;
			/*
			var newWidget = Ember.$('.gridster ul')
							 .gridster().data('gridster')
							 .serialize()[newIndex];

			newWidget = Ember.Object.create(newWidget);		*/
			// this.get('model').get('currBoard').get('items')[newIndex].set('widget',newWidget);

			// console.log('curItems', curItems);
			// curItems.pushObject(obj);

		},
		onEditTitle() {

		},
		removeItem(index) {
			console.log('removeItem index',index);
			var currItem = this.get('model').get('items');
			currItem.removeObject(currItem[index]);
			// push item into tolaboardItems array
			// this.tolaboardItems.pushObject(newID);
			// this.tolaboardItems.removeObject(index);
			// console.log('removeItem called by tb-item via sendAction');
		},
		/* this action needs passed into any child component which needs to display the
		   graph builder widget */
		/*activateGraphBuilder: function() {
			if(!this.showGraphBuilder) {
				this.set('showGraphBuilder',true);
			}

		},*/

		/*setActiveTBItemConfig: function(tbItemConfig) {
			this.set('activeTBItemConfig', tbItemConfig);

		},*/
		/*setActiveElement: function(element) {
			this.set('activeElement',element);
			// console.log('tb-designer.element',element);
		},*/
		/*setActiveIndex: function(index) {
			this.set('activeIndex',index);
			// console.log('tb-designer.index',index);
		},*/

		onWidgetChange() {
			console.log('widget(s) either added, resized, or dragged!');



		},



	}
});
