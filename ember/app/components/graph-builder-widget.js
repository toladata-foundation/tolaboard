/* gbw component is the workhorse of Boards
Provides an intuitive UI for creating graphs
Needs to open clean with newly added widgets, and open pre-populated when
a graph already exists in the rendered tb item that called it.
*/
import Ember from 'ember';

export default Ember.Component.extend({
	
	store: Ember.inject.service(),

	showDataSourcePreview: false,
	showVizSelection: false,
	showDataModel: false,
	renderGraph: false,
	filters: [],

	/* data-target for modals... each item (index) has its own */
	dataTarget: Ember.computed('index', function() {
    	return 'gbwModal' + this.get('index')
    }),

	graphOptions: Ember.computed('store', function() {
		return this.get('store').findAll('graph-option');
	}),
    
	/* built-up over the course of using gbw component, then assigned to tbItemConfig on save */
	

	// scopeComponent: 'graphs/chartjs-bar',	
	scopeData: Ember.Object.create(), // placeholder for the data populated by getData action
	// scopeGraphID: undefined,
	scopeDataModel: Ember.Object.create(), // holds the current selected graph metadata
	scopeComponent: undefined,

	disableSave: false,
	// tolaGraph: {name: 'tolaGraph from tolagraph.js!!!'},


	// wanted to log these hooks running to understand Ember better
	// Ember calls these methods
	didInsertElement() {		
		console.log('gbw this ',this);
		// create empty object to use as placeholder for tbItemConfig

		// this.set('graphOptionsCopy', Ember.Object.create(this.get('graphOptions')));

		this.set('tbItemConfigTemp', Ember.Object.create());
		this.get('tbItemConfigTemp').set('widget', Ember.Object.create());
		this.get('tbItemConfigTemp').set('graph', Ember.Object.create());
		
		/* if there's a defined tbItemConfig, use it to populate gbw */		
		/*if(tbItemConfig) {
			this.set('scopeData', 'url', this.get('dataSources')[tbItemConfig.graph.dataSourceId].url);
			this.toggleProperty('showDataSourcePreview');
			
			Ember.$.getJSON(url, function(data) { 					
				self.setProperty('scopeData', 'preview', data.splice(0,200))				
			});
		}*/

	},

	actions: {
		
		/* Ideally, you make use of Ember stores, adapters and serializers here,
		   but data is very dynamic, so no model exists... using AJAX via .getJSON() */
		getData(dataSourceId) {
			this.get('tbItemConfigTemp').get('graph').set('source', dataSourceId);			

			// this is working... updating scopeData property in callback
			var url = 'http://localhost:2021/api/data/' + dataSourceId;
			this.set('dataSourceUrl', url);
			this.set('showDataSourcePreview',true);
			var self = this;
			Ember.$.getJSON(url, function(data) {
				var finalData = JSON.parse(data).data;
				finalData.forEach(function(d) { d.row_count=1 });
				self.set('scopeData', finalData);
				self.set('showVizSelection',true);	

				console.log('scopeData',self.get('scopeData'))

			});			

		},

		
		/* Handles updating the data bound to the dropdown area. When a graph
		   is selected (ie. image clicked), the dataModel for the graph type
		   is assigned to the data for the dropdown, and the bindings should
		   make it update automagically in the view. 

		   This also takes the columns from the selected data set, and uses
		   them to populate the dropdown boxes */
		showGraphDataModel(graph) {	
			// define/update tbItemConfig.graph.component
			// this.get('tbItemConfig').graph.set('component', graph.get('component'));
			this.get('tbItemConfigTemp').get('graph').set('component', graph.get('component'));
			this.get('tbItemConfigTemp').get('graph').set('dataModel', graph.get('dataModel'));

			this.set('showDataModel',true);
			
			// redundant, but facilate data binding
			this.set('scopeDataModel', graph.get('dataModel'));
			this.set('scopeComponent', graph.get('component'));			
			
		},

		tryGraphRender(selectedField) {

			// define/update tbItemConfig.graph.dataModel
			// this.get('tbItemConfig').graph.set('dataModel', this.get('scopeDataModel'));
			// this.get('tbItemConfigTemp').get('graph').set('dataModel', this.get('scopeDataModel'));

			// destroy any previously generated graphs
			this.set('renderGraph', false);

			// kind of hacky, but gets the data model field name
			var dataModelFieldName = event.target.name;

			// first figure out if there's an existing graph, if so, remove it
			if(this.get('renderGraph')) {
				// possibly remove this				
			}

			// update the data model with assignments
			Ember.set(this.get('tbItemConfigTemp').get('graph').get('dataModel')
				 .findBy('name',dataModelFieldName), 'assigned',selectedField);

			var requiredFields = this.get('tbItemConfigTemp').graph.dataModel
			               .filter(function(item) { return item.required === true})
			               .map(function(d) { 
			               		return d.assigned.length
			               	});

			if(requiredFields.indexOf(0) === -1) {			
				console.log('renderGraph now being set to true');
				// this.set('renderGraph',true);
				var self = this;
				setTimeout(function() { 
					self.set('renderGraph',true); 
					self.set('showDataFilters',true);
				}, 250);
				this.set('disableSave', false);
				// this.set('scopeComponent','graphs/chartjs-bar');	
				// this.set('scopeComponent', this.get('graphOptions')[this.scopeGraphID].component);
				// this.actions.showGraphDataModel(this.get('graphOptions')[this.scopeGraphID]);
			}

			

		},

		/* manipulates array of filters */
		addFilter() {
			// get max id of current filterArr, add 1, and that's the new id
			var filterArr = this.get('filters'),
			    newID;
			
			if (filterArr.length === 0) {
				newID = 0;
			}
			else {
				newID = 1+Math.max.apply(null, filterArr.map(function(d) { return d.id}));
			}
			filterArr.pushObject({id:newID});
			
		},
		/* delete filter of matching id */			
		deleteFilter(id) {			
			var filterArr = this.get('filters');
			var index = filterArr.map(function(d) { return d.id}).indexOf(id); // index of located id
			filterArr.removeObject(filterArr[index]);			
		},
	 	updateFilter(id, params) {
			console.log('update filter!!! ', id);
		},

		destroyChart() {
			this.set('renderGraph', false);
		},

		closeGBW() {
			// set renderedItem's GBW showGraphBuilder property to false
			this.sendAction('closeGBW');
		},

		/*clearGraphBuilder: function() {

			Ember.$('#data-source-select option:eq(0)').prop('selected',true);
			this.set('showDataSourcePreview', false);
			this.set('showVizSelection', false);
			this.set('showDataModel', false);
			this.set('renderGraph', false);		
			this.set('showDataFilters',false);
			this.set('filters', []);
			this.set('scopeData', []);
			this.set('scopeGraphID', undefined);
			this.set('scopeDataModel', undefined);
			this.set('scopeComponent', undefined);
			this.set('disableSave', true);


			// this.destroyElement();
		},*/

		didDestroyElement() { 
			// console.log('did destroy gbw');
			// this.sendAction('removeItem', this.get('index'));
			/* Once element is destroyed, destroy underlying object
			   if this isn't done, didRender keeps running on it.
			   	Might also create memory leaks, but not certain.*/
			// this.destroy();
		},
		
		saveBoardItem() {
			// save what's been configured so far in the temp object to the real one
			this.set('tbItemConfig',this.get('tbItemConfigTemp'));
			// this.sendAction('updateSaveBoardItem', this.get('tolaGraph'));
			// this.sendAction('updateBoardItem');
		}		
		
	} // end actions

	

});
