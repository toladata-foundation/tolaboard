/* this component is the workhorse of creating a new board item
Provides an intuitive UI for creating graphs

Needs to open clean with newly added widgets, and open pre-populated when
a graph already exists in the rendered tb item that called it.
*/
import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
	
	store: Ember.inject.service(),
	dataAgg: Ember.inject.service('data-aggregator'),	

	showDataSourcePreview: false,
	showVizSelection: false,
	showDataModel: false,
	renderGraph: false,
	filters: [],
	
	/* kludgy, but I need the dropdown selected if a data source exists */
	selectedSource: Ember.computed('tbItemConfig', function() {		
		if(typeof(this.get('tbItemConfig').graph) !== "undefined") {
			var retVal = this.get('tbItemConfig').graph.source;			
		} else retVal = null;
		console.log('sourceId',retVal)

		return retVal;
	}),
	/*showPreviewData: Ember.computed('tbItemConfig', function() {
		// data 
	}),*/
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

	// Ember calls these methods
	/* Two scenarios for inserting graphBuilderWidget: 
		1. persisted board (selected source, defined component/model, etc)
		2. brand new - loads empty, and user is walked through creating graph
	*/
	didInsertElement() {		
		console.log('gbw this ',this);
		/* regardless of scenario, instantiante temp config as Ember object 
		   and make sure widget and graph are ember objects */
		this.set('tbItemConfigTemp', Ember.Object.create());
		this.get('tbItemConfigTemp').set('widget', Ember.Object.create());
		this.get('tbItemConfigTemp').set('graph', Ember.Object.create());	

		/* scenario 1 */		
		/*if(typeof(this.get('tbItemConfig').graph) !== 'undefined') {
			this.get('tbItemConfigTemp').set('widget', this.get('tbItemConfig').widget);
			this.get('tbItemConfigTemp').set('graph', this.get('tbItemConfig').graph);
			// attempt to fill in as much as possible
			if(typeof(this.get('tbItemConfig').graph.source) !== 'undefined') {
				this.send('getData', this.get('tbItemConfig').graph.source);
				console.log('found tbItem with data source',this)
			}
		} else {
			// make sure empty widget and graph are Ember objects 
			this.get('tbItemConfigTemp').set('widget', Ember.Object.create());
			this.get('tbItemConfigTemp').set('graph', Ember.Object.create());	
		}*/
		
		this.get('tbItemConfigTemp').set('widget', Ember.Object.create());
		// this.get('tbItemConfigTemp').set('graph', Ember.Object.create());
		
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
			console.log('getData called on this', this);
			try {
				this.get('tbItemConfigTemp').get('graph').set('source', dataSourceId);			

				// this is working... updating scopeData property in callback
				var url = ENV.API.url + '/api/data/' + dataSourceId;
				this.set('dataSourceUrl', url);
				this.set('showDataSourcePreview',true);
				var self = this;
				
				var tablesPreview = this.get('dataAgg').selectPreview(dataSourceId, ENV.API.previewSize);
				// var tablesPreview = this.get('dataAgg').offlineTestData();
				tablesPreview.then(function(result) {
					self.set('previewData', result);
					self.set('showVizSelection',true);	

				});
			}
			catch(err) {
				console.log('Data retrieval error: ',err);
			}

		},

		
		/* Handles updating the data bound to the dropdown area. When a graph
		   is selected (ie. image clicked), the dataModel for the graph type
		   is assigned to the data for the dropdown, and the bindings should
		   make it update automagically in the view. 

		   This also takes the columns from the selected data set, and uses
		   them to populate the dropdown boxes */
		showGraphDataModel(graph) {	
			try{
				this.get('tbItemConfigTemp').get('graph').set('component', graph.get('component'));
				this.get('tbItemConfigTemp').get('graph').set('dataModel', graph.get('dataModel'));

				this.set('showDataModel',true);
			
			// redundant, but facilate data binding
			this.set('scopeDataModel', graph.get('dataModel'));
			this.set('scopeComponent', graph.get('component'));			
			} 
			catch(err) { console.log(err)}
			
		},

		tryGraphRender(selectedField) {

			try	{

			// destroy any previously generated graphs
			this.set('renderGraph', false);

			// kind of hacky, but gets the data model field name
			var dataModelFieldName = event.target.name;
			
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
			}

			} //end try
			catch(err) {
				console.log('Graph render attempt failed with error: ', err);
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

		didDestroyElement() { 
			// console.log('did destroy gbw');
			// this.sendAction('removeItem', this.get('index'));
			/* Once element is destroyed, destroy underlying object
			   if this isn't done, didRender keeps running on it.
			   	Might also create memory leaks, but not certain.*/
			// this.destroy();
		},
		
		saveBoardItem() {
			console.log('tbItemConfig',this.get('tbItemConfig'))
			console.log('tbItemConfig',this.get('tbItemConfigTemp'))
			// save what's been configured so far in the temp object to the real one
			this.get('tbItemConfig').set('graph', this.get('tbItemConfigTemp').graph);
			// this.sendAction('updateSaveBoardItem', this.get('tolaGraph'));
			// this.sendAction('updateBoardItem');
		}		
		
	} // end actions

	

});
