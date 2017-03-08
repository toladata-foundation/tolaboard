/* This is probably the most crucial component in this application...
   It handles all rendering of a given TolaBoard component and is used by the
   dashboard-view to display a TolaBoard, and the dashboards route to edit or
   create a tolaboard. It includes use of the gridster.js widget and data
   visualization living inside of that widget. The graph is rendered via a child
   graph component which each viz type has a definition for in the components/graph
   folder.

   Note: This component needs to handle cases where the widget is newly created and empty (like designer),
   AND, in cases where thishe widget is pre-defined by a stored Tolaboard (dashboard-view)

   Component flow:
   tolaboard-designer (parent to this component)
   		render-tolaboard-item (this component)
   			graph component (child) ==> defined dynamically based on graph selection
   			graph-builder-widget (child) ==> modal popup which allows for graph building

	Data flow:
		render-tolaboard-item
			tbItemConfig - first instance passed from tolaboard-designer
			widget - part of tbItemConfig and relies on gridster.js

			graph-builder-widget
				tbItemConfig.graph
					.dataSourceUrl - via dropdown data source select
					.component - via selecting a graph
					.scopeDataModel - via dropdown select
					.filters - via "add filter" option

			graph component (chartjs-bar for example)
				tbItemConfig.graph
					.config - after getting data, and varies by chart library

*/



import Ember from 'ember';

export default Ember.Component.extend({

	store: Ember.inject.service(),
	showGraphBuilder: false,
	toggleRender: true,
	// describe this
	dataTarget: Ember.computed('index', function() {
    	return '#gbwModal' + this.get('index')
    }),
	deleteTarget: Ember.computed('index', function() {
		return '#tbi-delete-item' + this.get('index');
	}),
	// graphInputs: Ember.computed('tbItem', function() {
	// 	console.log('RENDER COMPUTED PROP FOR graphInputs');
	// 	return this.get('tbItem').get('graphinputs');
	// }),
	selectedGraphInputs: Ember.computed('fooInput', function() {
    /* stupid hack I had to do to deal with delay in results from store
       This computed property needs calculated for any persisted graphinputs
       to be picked up and selected in the UI. By setting/changing fooInput,
       we're changing the dependency of this property, thus resulting in its
       re-calc (after initially returning an empty array)*/
    // this.get('store').query('graphinput',{item: this.get('tbItem').get('id')})
    //                  .then(() => this.set('fooInput',true));
    var graphInputs = this.get('tbItem').get('graphinputs');

    // if graphInputs not empty, set renderGraph to true
    if(graphInputs.length >0) { this.set('toggleRender',true)}
    // console.log('graphInputs==>',graphInputs)
    return graphInputs;

    // return graphInputs.map(function(gi) {
    //   return {graphmodel: gi.get('graphmodel').get('name'),
    //           graphmodelvalue: gi.get('graphmodelvalue')
    //         };
    //       }); // end map
    // return [{graphmodel: 'group', graphmodelvalue: 'origin'}, {graphmodel: 'size', graphmodelvalue: 'total_family_count'}]
  }),
	// makes things easier to do this here
	// unlike modal builder, this only deals with persisted items
	inputToModelMapper: Ember.computed('selectedGraphInputs', function() {
		this.get('tbItem').get('graphinputs');
		// this.get('store').findAll('graphmodel')
		// this.get('store').query('graphinput', {item: 84})
    var tmpObj = Ember.Object.create({});
    tmpObj.set('graphType', this.get('tbItem').get('graph').get('label'));
    var persistedDataModel = this.get('tbItem').get('graphinputs').map(function(gi) {
        return {
          graphModelName: gi.get('graphmodel').get('name'),
          graphModelValue: gi.get('graphmodelvalue')}
        });
    tmpObj.set('graphInputs', persistedDataModel)
    // this.set('inputToModelMapper', persistedDataModel || Ember.Object.create({}));
    return tmpObj || Ember.Object.create({});
  }),

	// I have no idea why this needs to be separate from above, but it was the only way to make it work based on current knowledge
	newInputToModelMapper: Ember.computed('tbItem', function() {
		/* This property is a workaround to the problem in Ember of retrieving records from a hasMany relationship.
		   We need to have a promise which when returns, populates this prop with data model needed by chart components
		*/
		this.get('store').findAll('graphmodel')
		this.get('store').query('graphinput', {item: this.get('tbItem').get('id')})
		return this.get('tbItem').get('graphinputs').getEach('graphmodelvalue');
		// return this.get('tbItem')
		// return this.get('store').findAll('graphmodel')
	}),


	didInsertElement() {
		console.log('didInsert render-tolaboard-item',this);
		// console.log('source', this.get('tbItem').get('source').get('id'))
		// console.log('graph', this.get('tbItem').get('graph').get('label'))
		// console.log('items', this.get('tbItem').get('graphinputs'))
		// this.get('selectedGraphInputs');
		// this.set('toggleRender', true);

		// this.get('graphInputsDep');
		// this.get('dataModel');
		console.log('NEW INPUT TO MODEL MAPPER', this.get('newInputToModelMapper'));

		// var self = this;
		// setTimeout(function() {
		// 	self.get('selectedGraphInputs')
		// 	console.log('after timeout ', self.get('inputToModelMapper'))
		// },1500);

		try {

		/* Same issue here as with tolaboard-item component. Using the higher level API
		   doesn't work for ember because it appends the li to the ".gridster ul" selector.
		   Need to append to ember view piece by piece like in tb-item

		   */

		// comment out?
		var el = Ember.$(this.get('element'));

		// normally don't need in ES6, but we do for gridster and Ember integration
		var thisIndex = this.get('index');
		// console.log('thisIndex===>',thisIndex)

		var thisItem = this;

		var grid = Ember.$('.gridster ul');

		/* Defines default gridster widget size*/
		grid.gridster({
		        widget_margins: [5, 5],
		        widget_base_dimensions: [140, 140],

		        resize: { enabled: true,
		        		  stop(e,ui,$widget) {
										var targetItemIndex = $widget[0].dataset.index;
										var targetItem = thisItem.get('model').get('items').canonicalState[targetItemIndex].getRecord();
										// console.log('targetItem ref index', targetItem.get(''))
										// temp1.get('model').get('items').map(function(d) { return d})[0]
										// temp1.get('model').get('items').map(function(d) { return d})[0]
										// console.log('thisItem', thisItem)
										// console.log('resize on index ', thisItem.get('index'))
										// console.log('$widget sizey', Math.round(($widget.data().coords.data.height-10)/140) )
										// console.log('$widget sizex', Math.round(($widget.data().coords.data.width-10)/140) )
										var currWidget = $widget.data();
										// console.log('resize', currWidget);
										targetItem.set('widgetrow', currWidget.row);
										targetItem.set('widgetcol', currWidget.col);
										targetItem.set('widgetsizex', Math.round(($widget.data().coords.data.width-10)/140));
										targetItem.set('widgetsizey', Math.round(($widget.data().coords.data.height-10)/140));

										targetItem.save();



		        		  }},
		        draggable: {
		        		  stop(e,ui) {
										var currWidget = Ember.$(e.target).data();
										// var currWidget = Ember.$(e.target);
										var targetItemIndex = currWidget.coords.el['0'].dataset.index;
										var targetItem = thisItem.get('model').get('items').canonicalState[targetItemIndex].getRecord();
										// console.log('dragged', currWidget);
		        		  	// thisItem.get('tbItem').set('widgetrow', currWidget.row);
										// thisItem.get('tbItem').set('widgetcol', currWidget.col);
										// thisItem.get('tbItem').set('widgetsizex', currWidget.sizex);
										// thisItem.get('tbItem').set('widgetsizey', currWidget.sizey);
										//
										// thisItem.get('tbItem').save();
										targetItem.set('widgetrow', currWidget.row);
										targetItem.set('widgetcol', currWidget.col);
										targetItem.set('widgetsizex', Math.round((currWidget.coords.data.width-10)/140));
										targetItem.set('widgetsizey', Math.round((currWidget.coords.data.height-10)/140));

										targetItem.save();

		        		  }}
		});

		// API object for dynamic
		// see if you can remove or rename
		grid = grid.gridster().data('gridster');

		// if itemMutable is false...
		if(!this.get('itemMutable')) {

			// disable grid dragging, resizing
			grid.disable();
			grid.disable_resize();
			Ember.$('.gridster ul').gridster({resize: {enabled: false}});
			Ember.$('.gridster li').css('cursor','pointer');

		}

		// get the .hbs template for this instance of the component, set it to thisView
		// what is the child here?
		var thisView = this.get('element').childNodes[0];
		// console.log('THISVIEW!!!!', thisView)
		/* above line doesn't work because no li was added during the view
		   we could assume an li needs to be added, then follow through as before
		   i mean, if edit mode is used, we need that same view with the edit/delete buttons*/
		// var thisView = this.get('element');

		// add attrs that will activate css so grid is positioned and sized
		Ember.$(thisView).attr({
                'data-col': this.get('tbItem').get('widgetcol'),
                'data-row': this.get('tbItem').get('widgetrow'),
                'data-sizex' : this.get('tbItem').get('widgetsizex'),
                'data-sizey' : this.get('tbItem').get('widgetsizey')
            }).addClass('gs-w');

		// add to $widgets object
		// console.log('grid ', grid);

		grid.$widgets = grid.$widgets.add(thisView);
		// console.log('grid widgets',grid.$widgets);

		// register
		grid.register_widget($(thisView));

		// remaining bits
		grid.add_faux_rows(2);
		grid.set_dom_grid_width();
    grid.set_dom_grid_height();
    grid.drag_api.set_limits(grid.cols * grid.min_widget_width);

        // now define scopeGraph
        /* This is not advised, and throws a warning in the error console. Ember wants
        	you to use a computed property within the component level object. However,
        	this doesn't seem to work well since we need the component's view to be
        	rendered entirely before assign a value to the scopeGraph. Otherwise,
        	the component graph for this particular renders using 100% window width
        	instead of the width of the widget. */
        // this.set('scopeGraph', this.get('tbItemConfig').graph.component);

    	} // end try

    	catch(err) {
    		console.log('didInsert error ',err)
    	}

	},

	/* willDestroyElement called by the ember run-time when the component is about to
	   be destroyed. In this time, we need to clean up the gridster data model, and
	   remove the element from there. Otherwise, we'll have data but no corresponding
	   DOM element, and the serialization will be off. */
	willDestroyElement() {
		console.log('render willDestroyElement called!!!');
		// get the element

		var removeEl = this.get('element').childNodes;

		/* USE THE API!  Don't remove with just jQuery
			   It needs removed from data object too. If you have any
			   questions if things are going right... check the following
			   in the console:
			   $('.gridster ul').gridster().data('gridster').$widgets
			   It's the data model for the grid widgets
			   */

		/*Ember.$('.gridster ul').gridster()
		     .data('gridster')
		     .remove_widget(removeEl, function() {
		     	// add any logic needed after widget removed here if applicable
				});*/

		// we also need to remove the item from our items array maintained
		// in tolaboard-designer
		this.sendAction('removeTBItem',this.get('index'));

	},

	/* didDestroyElement destroys the underlying Ember object representing the component.
	   This is the final step. If this isn't done, didRender keeps running on it.
	    Might also create memory leaks, but not certain.*/
	didDestroyElement() {
		console.log('render didDestroyElement called!!!');
		// this.sendAction('removeItem', this.get('index'));
		/* Once element is destroyed, destroy underlying object
		   if this isn't done, didRender keeps running on it.
		   	Might also create memory leaks, but not certain.*/
		this.destroy();
	},

	actions: {

		activateGraphBuilder() {
			/*console.log('tbItem:',this.get('tbItemConfig'));
			console.log('widget',this.get('tbItemConfig').widget);
			console.log('thisView',this.get('element').childNodes[0]);*/

			// this.sendAction('activateGraphBuilder');
			this.set('showGraphBuilder',true);

			/*this.sendAction('setActiveTBItemConfig',this.get('tbItemConfig'));
			this.sendAction('setActiveElement',this.get('element').childNodes[0]);
			this.sendAction('setActiveIndex',this.get('index'));*/
			// this.sendAction('setActiveWidget','fooWidget');
		},

		/* runGraphBuilderWidget action is called by the edit button, if applicable.
		   This is currently only the case for the designer component. */
		runGraphBuilderWidget() {
			/* the modal will actually display the builder, but anything
			   needed to run at this stage in tb-item goes here */
			this.sendAction('setActiveItem', this.get('elementId'));
		},
		/*appendContent: function(tolagraph) {
			// called via sendAction in graph-builder-widget component
			console.log('appendContent', tolagraph);
		},*/
		onDeleteItem() {
			console.log(this.get('element'))
			this.get('tbItem').destroyRecord();
		},

		toggleGraphRendering() {
			this.set('toggleRender', false);
			setTimeout(() => {
				this.set('toggleRender', true);
			}, 250);

		},

		/*setDeleteTarget(targetItem) {
				this.set('deleteTarget',targetItem);
				console.log('target for deletion', this.get('deleteTarget'));
				console.log('ember element', this.get('element'));
				// this.destroyElement();
				targetItem.destroyRecord();


		},*/
		/*
		onDeleteWidget(item) {

			console.log('delete widget',this.get('deleteTarget'))

			item.get('tbItem').destroyRecord();
			item.save();
		},*/



	}
});
