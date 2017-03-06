import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
	dataAgg: Ember.inject.service('data-aggregator'),

  // inputToModelMapper: Ember.Object.create({}),
  resetModalSelection: false,
  tempSource: Ember.Object.create({}),
  tempGraph: Ember.Object.create({}),
  tempGraphInputs: Ember.Object.create({}),
  tbItemSelected: Ember.computed('selectedSource', 'selectedGraphInputs', function() {
    //
    var tmp = Ember.Object.create({});
    tmp.set('source', this.get('selectedSource'));
    tmp.set('graphinputs', this.get('selectedGraphInputs'));

    return tmp;
  }),

  showDataSourcePreview: false,
	showVizSelection: false,
  // showGraphDataModel: false,
  renderGraph: true,
  // renderGraph: Ember.computed('selectedSource', 'selectedGraph', 'selectedGraphInputs', function() {
  //
  //   var silo = this.get('selectedSource').get('id'),
  //       embercomponent = this.get('selectedGraph').get('embercomponent'),
  //       graphInputs = this.get('selectedGraphInputs').getEach('graphmodelvalue');
  //
  //   return !!(silo && embercomponent && graphInputs);
  //
  // }),

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
    console.log('selectedSource invoked!!')
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
    // console.log('selectedGraph computed to be', graph)
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

    console.log('graphInputs==>',graphInputs)
    return graphInputs;

    // return graphInputs.map(function(gi) {
    //   return {graphmodel: gi.get('graphmodel').get('name'),
    //           graphmodelvalue: gi.get('graphmodelvalue')
    //         };
    //       }); // end map
    // return [{graphmodel: 'group', graphmodelvalue: 'origin'}, {graphmodel: 'size', graphmodelvalue: 'total_family_count'}]
  }),

  selectedGraphComponent: Ember.computed('selectedGraph', function() {
    // init with a store defined component if one exists, update per graph
    // console.log('selectedGraphComponent called!!');
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
      // console.log('attempt render', selectedField, dataModelFieldName);
      // console.log('selectedSource', this.get('selectedSource'));
      // console.log('selectedGraph', this.get('selectedGraph'));
      // console.log('selectedGraphInputs', this.get('selectedGraphInputs'));
    },
    onGraphInputSelectFoo(selectedField) {

      this.set('renderGraph', false);
      // setup inputModelMapper if undefined
      if(!this.hasOwnProperty('inputToModelMapper')) {
        console.log('CREATING NEW INPUT MAPPER')
        this.set('inputToModelMapper', Ember.Object.create({}));
      }
      // define graphType if undefined, then define graphmodel
      if (!this.get('inputToModelMapper').hasOwnProperty('graphType')) {
        this.get('inputToModelMapper').set('graphType', this.get('selectedGraph').get('label'));
        // this.get('inputToModelMapper').set('mapper', [{}])
        console.log('CREATING NEW GRAPH TYPE')
        this.get('inputToModelMapper').set('graphInputs',
          this.get('graphDataModels').getEach('name').map(function(name) {
            return {graphModelName: name}
          })
        )
      } else {
        // update graphType if different from selectedGraph.label

        if (this.get('inputToModelMapper').get('graphType') !== this.get('selectedGraph').get('label')) {
          console.log('UPDATE GRAPH TYPE')
          this.get('inputToModelMapper').set('graphType', this.get('selectedGraph').get('label'));
          // reset graphInputs
          this.get('inputToModelMapper').set('graphInputs',
            this.get('graphDataModels').getEach('name').map(function(name) {
              return {graphModelName: name}
            })
          );
        }
      } // end else

      // almost there... define graphModelValue using graphModelName and event.target.name
      console.log('target name', event.target.name)
      // find graphInputs with our target, and set graphModelValue
      var targetModel = this.get('inputToModelMapper').graphInputs.find(function(d) { return d.graphModelName === event.target.name })
      targetModel.graphModelValue =  selectedField;

      // after each input selection, need to figure out if graph is renderable
      // if so, set renderGraph to true


      console.log('inputToModelMapper ==>', this.get('inputToModelMapper'));

      var self = this;
      setTimeout(function() {
        self.set('renderGraph',true);
        // self.set('showDataFilters',true);
      }, 250);

      // situation A - no currently defined mapper in process


      // console.log('selectedGraphInputs', this.get('selectedGraphInputs'));
      // console.log('graph models', this.get('graphDataModels'));

      // this.get('graphDataModels').getEach('name')
    },
    onGraphInputSelect(selectedField) {
      // console.log('selectedField', selectedField)
      console.log('selectedGraphInputs', this.get('selectedGraphInputs'))
      var currSelectedInputs = this.get('selectedGraphInputs');
      /* if there are no selected graph inputs, then we need to create */
      if(currSelectedInputs.length) {
        console.log('need to create graphinput record')
        // setup new graphinput for each graphmodel
        // this.set('selectedGraphInputs', this.get('store').createRecord('graphinput', {
        //   item: this.get('tbItem'),
        //   graphmodel: this.get('selectedGraph').get('graphmodels')
        // })); // end set

      }
      /* This function runs whenever a field is selected in the graph inputs
         It checks if minimal number of fields defined, and attempts to render graph */
      try {
        var matchInput = currSelectedInputs.find(function(gi) {
          return gi.get('graphmodel').get('name') === event.target.name
        });
        // update selected inputs
        // Ember.set(this.get('selectedGraphInputs').find(
        //   function(d) { return d.graphmodel===event.target.name
        //   }), 'graphmodelvalue', selectedField);
        // console.log('matchInput', matchInput)
        // console.log(this.get('selectedGraphInputs'));
        matchInput.set('graphmodelvalue', selectedField);



      }
      catch(err) { console.log(err)}

    },

    cancelGraphBuilder() {
      console.log('cancel called');
      // wipe out everything, and force it to pick again
      // this.set('selectedSource', null);
      // this.set('previewData', null);
      // this.set('showDataSourcePreview', false);
      // this.set('showVizSelection', false);
      // this.set('showGraphDataModel', false);

      var self = this;
      this.set('selectedSource', this.get('tbItem').get('source'));
      this.set('selectedGraph', this.get('tbItem').get('graph'));
      this.get('actions').onGraphSelect.call(self, this.get('tbItem').get('graph'));

      var tablesData = this.get('dataAgg').selectPreview(this.get('selectedSource').get('id'), 20);
          tablesData.then(function(results) {
            self.set('previewData', results);
            console.log('results to previewData', results)
            if(results.length>0) {
              self.set('showDataSourcePreview',true);
              self.set('showVizSelection', true);
            }
            else {
              self.set('showDataSourcePreview',false);
              self.set('showVizSelection', false);
            }

          });
      // this.set('resetModalSelection', new Date().toISOString());

      // this.set('previewData', null);
      // this.set('showDataSourcePreview', false);
      // this.set('showVizSelection', false);
      // this.set('showGraphDataModel', false);
      // this.set('resetModalSelection',true);


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
      // this.get('tbItem').set('graphinputs', this.get('selectedGraphInputs'));

      this.get('tbItem').save();
      this.get('tbItem').get('graphinputs').save();

      this.sendAction('toggleGraphRendering');

    },


  }
});
