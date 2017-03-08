import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
	dataAgg: Ember.inject.service('data-aggregator'),

  inputToModelMapper: Ember.computed('selectedGraphInputs', 'selectedGraphModels', function() {
    console.log('inputToModelMapper invoked');
    var tmpObj = Ember.Object.create({});
    tmpObj.set('graphType', this.get('selectedGraph').get('label'));
    // either use what's coming from persisted graphinputs for this item
    // OR, define placeholder object using selectedGraphModels
    var persistedDataModel = this.get('selectedGraphInputs').map(function(gi) {
        return {
          graphModelName: gi.get('graphmodel').get('name'),
          graphModelValue: gi.get('graphmodelvalue')}
        });
    if(persistedDataModel.length === 0) {
      persistedDataModel = this.get('selectedGraphModels').map(function(gi) {
        return {
          graphModelName: gi.get('name'),
          graphModelValue: ''
        };
      })
    }

    tmpObj.set('graphInputs', persistedDataModel)
    // this.set('inputToModelMapper', persistedDataModel || Ember.Object.create({}));
    return tmpObj || Ember.Object.create({});
  }),
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

  // not used, yet, so maybe delete
  dataModel: Ember.computed('tbItem', 'inputToModelMapper', function() {
    /* calculated from either persisted graphinputs, dropdown selections, or mix
    use selectedGraphModels to determine how many potential inputs there could be
    scen 1 - everything new... not tbItem, no graphinputs, no inputToModelMapper
           - can just use inputModelMapper
    scen 2 - initial load of persisted graph
           - just use tbItem and graphInputs along with the map
    scen 3 - persisted graph loaded, but change made in dropdown
           - use persisted selections, until overridden by dropdown selection

    so this comp prop needs to look at everything and figure out which scenario from above is right

    */
    // console.log('modal builder comp prop for dataModel');
    // console.log('any persisted inputs?', this.get('tbItem').get('graphinputs'));
    // console.log('any user selections?', this.get('inputToModelMapper'));
    // console.log('selectedGraphModels', this.get('selectedGraph').get('graphmodels'))

    // look at inputToModelMapper and see if graphModelValue is undefined
    // look for that value in persisted data
    var missingGraphValues = this.get('inputToModelMapper').graphInputs.find(function(d) { return d.graphModelValue === undefined})
    if (missingGraphValues) {
      missingGraphValues.map(function(mgv) {
        // lookup mgv.graphModelName in persisted data
      })
    }
    var modalMapper = this.get('inputToModelMapper');
		var retVal = null;

		if(modalMapper && modalMapper.get('graphInputs').length>0) {
			console.log('NEW INPUTS')
			retVal = modalMapper.get('graphInputs');
		}
		else {
			// console.log('PERSISTED INPUTS')
			retVal = this.get('tbItem').get('graphinputs').map(function(gi) {
					return {
						graphmodelname: gi.get('graphmodel').get('name'),
						graphmodelvalue: gi.get('graphmodelvalue')}
					})
		}
		// console.log('computed dataModel==>',retVal)
		return retVal;
  }),

  showDataSourcePreview: false,
	showVizSelection: false,
  // showGraphDataModel: false,
  renderGraph: false,
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
    // console.log('selectedSource invoked!!')
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

  selectedGraphModels: Ember.computed('selectedGraph', function() {
    return this.get('selectedGraph').get('graphmodels')
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

    // if graphInputs not empty, set renderGraph to true
    if(graphInputs.length >0) { this.set('renderGraph',true)}
    // console.log('graphInputs==>',graphInputs)
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
    onGraphInputSelect(selectedField) {

      /* This runs whenever a user makes a field selection in the dropdown.
         It all feels very hacky and kludgy to me, so maybe there's a better way */

      this.set('renderGraph', false);
      // setup inputModelMapper if undefined.... use persisted, if exists, or create emtpy object as last resort
      // if(!this.hasOwnProperty('inputToModelMapper')) {
      //   var persistedDataModel = this.get('selectedGraphInputs').map(function(gi) {
      //       return {
      //         graphmodelname: gi.get('graphmodel').get('name'),
      //         graphmodelvalue: gi.get('graphmodelvalue')}
      //       });
      //   this.set('inputToModelMapper', persistedDataModel || Ember.Object.create({}));
      //   console.log('CREATING NEW INPUT MAPPER')
      //   console.log(this.get('inputToModelMapper'))
      // }
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
      console.log('dataModel', this.get('inputToModelMapper').get('graphInputs'));
      // find graphInputs with our target, and set graphModelValue
      var targetModel = this.get('inputToModelMapper').get('graphInputs').find(function(d) { return d.graphModelName === event.target.name })
      targetModel.graphModelValue = selectedField;

      // after each input selection, make sure our inputToModelMapper has graphInputs of non-zero length
      console.log('inputToModelMapper ==>', this.get('inputToModelMapper'));
      console.log('length of mapper', this.get('inputToModelMapper').length)

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

    saveBoardItem() {
      try {
      /* update and persist live board item
         Could be and update or a new graph. Remember, the item model instance was persisted
         when the user clicked "add item". Since item has graph and source, just need to update those
         However!!! graphinputs are another matter, and you need to determine if it's a new

         if it's new... use createRecord('item', {}) (new also includes changing the graph model)
         but if existing, update the item's graphinputs */


      console.log('persist modal graph builder selections', this);

      // save source and graph on the item
      this.get('tbItem').set('source', this.get('selectedSource'));
      this.get('tbItem').set('graph', this.get('selectedGraph'));
      this.get('tbItem').save();

      // destroy current graphinputs if the exist
    //   if(this.get('tbItem').get('graphinputs').length > 0) {
    //     this.get('store').query('graphinput', {item: this.get('tbItem').get('id')}).then(function (inputs) {
    //       console.log('destroy graphinputs', inputs);
    //       inputs.forEach(function(input) {
    //         console.log('delete input==>', input)
    //         input.destroyRecord();
    //       })
    //    })
    //  }
    this.get('tbItem').get('graphinputs').map(function(ginput) {
      ginput.destroyRecord();
    })

     // Add new graph inputs if inputToModelMapper is not empty
     if(this.get('inputToModelMapper').graphInputs.length > 0) {
      this.get('selectedGraphModels').map( (gmodel) => {
        var item = this.get('tbItem');
        var gmv = this.get('inputToModelMapper')
                        .get('graphInputs')
                        .find(function(d) { return d.graphModelName === gmodel.get('name')});
        console.log('gmv value', gmv.graphModelValue)

        // create new graphinput records
        var newGraphInput = this.get('store').createRecord('graphinput', {
          item: item,
          graphmodel: gmodel,
          graphmodelvalue: gmv.graphModelValue
        });

        newGraphInput.save();

       })
      };


      // console.log('persisted vs selected graph', this.get('tbItem').get('graph').get('label'), this.get('selectedGraph').get('label'));

      // this.get('tbItem').set('source', this.get('selectedSource'));
      // this.get('tbItem').save();

      // reverse of mapping alg from before... take dataModel and get real graphinputs
      // console.log('new inputs?', this.get('inputToModelMapper').get('graphInputs'));
      this.get('tbItem').set('source', this.get('selectedSource'));
      this.get('tbItem').set('graph', this.get('selectedGraph'));
      // this.get('tbItem').set('graphinputs', this.get('selectedGraphInputs'));




      // create new graphinput records
      // this.store.createRecord('graphinput', {
      //   item: this.get('tbItem'),
      //   graphmodel: ,
      //   graphinputvalue: 'gender'
      //
      // })




      this.get('tbItem').save();
      // this.get('tbItem').get('graphinputs').save();

      this.sendAction('toggleGraphRendering');

    } // end try
    catch(err) { console.log('save error', err)}

    },


  }
});
