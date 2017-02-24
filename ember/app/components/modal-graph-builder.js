import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
	dataAgg: Ember.inject.service('data-aggregator'),

  tempSource: Ember.Object.create({}),
  tempGraph: Ember.Object.create({}),
  tempGraphInputs: Ember.Object.create({}),

  showDataSourcePreview: false,
	showVizSelection: false,
  // showGraphDataModel: false,
  renderGraph: true,

  /* data-target for modals... each item (index) has its own */
	dataTarget: Ember.computed('index', function() {
    	return 'gbwModal' + this.get('index')
  }),

  /* built from graphs and graphmodels, and used for displaying graph options */
  graphOptions: Ember.computed('store', function() {
    var graphs = this.get('store').findAll('graph'),
        graphmodels = this.get('store').findAll('graphmodel');

    return graphs;
  }),

	// array of all data sources the user has access to
	listDataSources: Ember.computed('store', function() {
		return this.get('store').findAll('boardsilo');
	}),

  selectedSource: Ember.computed('tbItem', function() {
    var source = this.get('tbItem').get('source') || Ember.Object.create({});
    // populate previewData if there's a source.id
    if (source.get('id')) {
      var self = this;
      var tablesData = this.get('dataAgg').selectPreview(source.get('id'), 20);
          tablesData.then(function(results) {
            self.set('previewData', results);
            self.set('showDataSourcePreview',true);
            self.set('showVizSelection', true);
          });
    }
    return source;
  }),

  selectedGraph: Ember.computed('tbItem', function() {
    var graph = this.get('tbItem').get('graph') || Ember.Object.create({});
    console.log('selectedGraph computed to be', graph)
    if (graph.get('graphmodels')) {
      this.set('graphDataModels', graph.get('graphmodels'));
      this.set('showGraphDataModel', true);
    }
    return graph;
  }),

  // create a simple array of the selected inputs to aid in dropdown selection
  selectedGraphInputs: Ember.computed('fooInput', function() {
    /* stupid hack I had to do to deal with delay in results from store
       This computed property needs calculated for any persisted graphinputs
       to be picked up and selected in the UI. By setting/changing fooInput,
       we're changing the dependency of this property, thus resulting in its
       re-calc (after initially returning an empty array)*/
    this.get('store').query('graphinput',{item: this.get('tbItem').get('id')})
                     .then(() => this.set('fooInput',true));
    var graphInputs = this.get('tbItem').get('graphinputs');

    // console.log('graphInputs==>',graphInputs)

    return graphInputs.map(function(gi) {
      return {graphmodel: gi.get('graphmodel').get('name'),
              graphmodelvalue: gi.get('graphmodelvalue')
            };
          }); // end map
    // return [{graphmodel: 'group', graphmodelvalue: 'origin'}, {graphmodel: 'size', graphmodelvalue: 'total_family_count'}]
  }),

  selectedGraphComponent: Ember.computed('selectedGraph', function() {
    // init with a store defined component if one exists, update per graph
    console.log('selectedGraphComponent called!!');
    return this.get('selectedGraph').get('embercomponent');
  }),

  renderModalGraph: Ember.computed('selectedSource', 'selectedGraph', 'selectedGraphInputs', function() {

    console.log('possible graph change detected!!!!!');
    // console.log('selectedSource', this.get('selectedSource').get('id'));
    // console.log('selectedGraph', this.get('selectedGraph').get('embercomponent'));
    // console.log('selectedGraphInputs', this.get('selectedGraphInputs').getEach('graphmodelvalue'));



  }),







  // selectedSource: Ember.computed('store', function() {
  //   return this.get('tbItem').get('source') || this.get('tempSource');
  // }),

  // selectedDataSource: Ember.computed('tbItemConfig', function() {
	// 	if(typeof(this.get('tbItemConfig').graph) !== "undefined") {
	// 		var sourceId = this.get('tbItemConfig').get('source').get('id');
	// 		var dataModel = this.get('tbItemConfig').graph.dataModel;
	// 		var self = this;
	// 		var tablesData = this.get('dataAgg').selectPreview(sourceId, 20);
	// 		tablesData.then(function(result) {
	// 			self.set('previewData', result);
	// 			self.set('showDataSourcePreview',true);
	// 			self.set('showVizSelection', true);
  //
	// 		});
  //
	// 	} else sourceId = null;
	// 	console.log('sourceId',sourceId)
  //
	// 	return sourceId;
	// }),

  // sourcePreview: Ember.computed('store', function() {
  //
  //   var sourceId = this.get('selectedSource').get('id');
  //   var tablesData = this.get('dataAgg').selectPreview(sourceId, 20);
  //   var self = this;
  //   tablesData.then(function(result) {
  //     self.set('previewSource', result);
  //     self.set('showSourcePreview',true);
  //     // this.set('showVizSelection', true);
  //     // return result;
  //
  //   });
  // }),

  didInsertElement() {
    console.log('didInsertElement mgb item',this);
    // this.get('store').query('graphinput',{item: this.get('tbItem').get('id')});
    // this.get('selectedGraphInputs');

  },

  actions: {
    onSourceSelect(sourceId) {
      if(!sourceId) {
        // wipe out any previous selections
        this.set('selectedSource', null);
        this.set('previewData', null);
        this.set('showDataSourcePreview', false);
        this.set('showVizSelection', false);
        this.set('showGraphDataModel', false);
      }
      else {
        // set selectedSource so it has focus in dropdown
        this.set('selectedSource', this.get('store').findRecord('boardsilo',sourceId));
        // retrieve preview
        var self = this;
        var tablesData = this.get('dataAgg').selectPreview(sourceId, 20);
      			tablesData.then(function(results) {
      				self.set('previewData', results);
      				self.set('showDataSourcePreview',true);
      				self.set('showVizSelection', true);
      			});
      }


    },
    onGraphSelect(graph) {
      // update graphDataModels so dropdown selections update
      var graphModels = graph.get('graphmodels');
      this.set('graphDataModels', graphModels);
      this.set('selectedGraph', graph);
      this.set('showGraphDataModel', true);
    },

    tryGraphRender(selectedField) {
      var dataModelFieldName = event.target.name;
      console.log('attempt render', selectedField, dataModelFieldName);
      console.log('selectedSource', this.get('selectedSource'));
      console.log('selectedGraph', this.get('selectedGraph'));
      console.log('selectedGraphInputs', this.get('selectedGraphInputs'));
    },
    onGraphInputSelect(selectedField) {
      /* This function runs whenever a field is selected in the graph inputs
         It checks if minimal number of fields defined, and attempts to render graph */
      try {
        // update selected inputs
        Ember.set(this.get('selectedGraphInputs').find(
          function(d) { return d.graphmodel===event.target.name
          }), 'graphmodelvalue', selectedField);



      }
      catch(err) { console.log(err)}

    },

    cancelGraphBuilder() {
      console.log('cancel called');
      // undo selections
      // selectedSource is either nothing or model value
      // this.set('selectedSource', this.get('tbItem').get('source'));
    },

    /* update and persist live board item */
    saveBoardItem() {
      // this.get('tbItem').set('source', this.get('selectedSource'));
      // this.get('tbItem').save();
      console.log('persist modal graph builder selections', this);
      this.get('tbItem').set('source', this.get('selectedSource'));
      this.get('tbItem').set('graph', this.get('selectedGraph'));

      this.get('tbItem').save();

    },


  }
});
