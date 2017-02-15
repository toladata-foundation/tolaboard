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

	// store: Ember.inject.service(),
	showGraphBuilder: false,
	toggleRender: true,
	// describe this
	dataTarget: Ember.computed('index', function() {
    	return '#gbwModal' + this.get('index')
    }),


	didRender() {

		// this is breaking things when moving from view to edit and vice versa
		// re-evaluate how you sync
		// this.get('actions').syncWidgetData(this);
		 },


	didInsertElement() {
		console.log('didInsert render-tolaboard-item',this);

		try {

		/* Same issue here as with tolaboard-item component. Using the higher level API
		   doesn't work for ember because it appends the li to the ".gridster ul" selector.
		   Need to append to ember view piece by piece like in tb-item

		   */

		// comment out?
		var el = Ember.$(this.get('element'));

		// normally don't need in ES6, but we do for gridster and Ember integration
		var thisIndex = this.get('index');
		console.log('thisIndex===>',thisIndex)

		var thisItem = this;

		var grid = Ember.$('.gridster ul');

		// var assignIndex = Ember.$(grid.data('gridster').$widgets[thisIndex]).data('index',thisIndex);

		/* Defines default gridster widget size*/
		grid.gridster({
		        widget_margins: [5, 5],
		        widget_base_dimensions: [140, 140],
		        /* on resize or drag events, need to sync gridster data object with
		           our Ember app's tbItemConfig which is our data representation
		           of a TolaBoard component. Below handles widget property */
		        resize: { enabled: true,
		        		  stop(e,ui,$widget) {
		        		  	console.log('$widget==>',$widget.data())

		        		  	/* I'm struggling with some aspects of gridster here. We need to update the tbItemConfig
		        		  	   for this component to reflect changes in the grid... for example, resize and drag.
		        		  	   These methods here are hooks for catching those events and working with them.
		        		  	   See draggable below as well. */

		        		  }},
		        draggable: {
		        		  stop(e,ui) {
		        		  	console.log('$widget==>',Ember.$(e.target).data())

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
		/* above line doesn't work because no li was added during the view
		   we could assume an li needs to be added, then follow through as before
		   i mean, if edit mode is used, we need that same view with the edit/delete buttons*/
		// var thisView = this.get('element');

		// add attrs that will activate css so grid is positioned and sized
		Ember.$(thisView).attr({
                'data-col': this.get('tbItemConfig').get('widgetcol'),
                'data-row': this.get('tbItemConfig').get('widgetrow'),
                'data-sizex' : this.get('tbItemConfig').get('widgetsizex'),
                'data-sizey' : this.get('tbItemConfig').get('widgetsizey')
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
		deleteWidget() {
			console.log(this);
			/* deleteWidget - as with runGraphBuilderWidget, only needed in edit mode when
			   the trashcan button is available. This action destroys the component */
			this.destroyElement();


		},

		syncWidgetData(item) {

			var gridsterWidget = Ember.$('.gridster ul').gridster().data('gridster').serialize()[item.get('index')];

			item.get('tbItemConfig').set('widgetrow', gridsterWidget.widgetrow);
			item.get('tbItemConfig').set('widgetcol', gridsterWidget.widgetcol);
			item.get('tbItemConfig').set('widgetsizex', gridsterWidget.widgetsizex);
			item.get('tbItemConfig').set('widgetsizey', gridsterWidget.widgetsizey);

			console.log('tbItem WIDGET==>',item.get('tbItemConfig'));
			console.log(Ember.$('.gridster ul').gridster().data('gridster').serialize()[item.get('index')])
		}
	}
});
