"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define("tolaboard/adapters/dashboard", ["exports", "ember-data"], function (exports, _emberData) {
	exports["default"] = _emberData["default"].RESTAdapter.extend({
		host: "assets/data/tolaboards/collection-tolaboards.json?jsonp=?",
		shouldReloadAll: function shouldReloadAll() {
			return true;
		}
	});
});
define('tolaboard/adapters/datasource', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].RESTAdapter.extend({
		host: 'assets/data/data-sources2.json?jsonp=?',
		shouldReloadAll: function shouldReloadAll() {
			return true;
		}
	});
});
define('tolaboard/adapters/graph-option', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].RESTAdapter.extend({
		host: 'assets/data/graph-options.json?jsonp=?',
		shouldReloadAll: function shouldReloadAll() {
			return true;
		}
	});
});
define('tolaboard/app', ['exports', 'ember', 'tolaboard/resolver', 'ember-load-initializers', 'tolaboard/config/environment'], function (exports, _ember, _tolaboardResolver, _emberLoadInitializers, _tolaboardConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _tolaboardConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _tolaboardConfigEnvironment['default'].podModulePrefix,
    Resolver: _tolaboardResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _tolaboardConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('tolaboard/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'tolaboard/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _tolaboardConfigEnvironment) {

  var name = _tolaboardConfigEnvironment['default'].APP.name;
  var version = _tolaboardConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('tolaboard/components/fa-icon', ['exports', 'ember-font-awesome/components/fa-icon'], function (exports, _emberFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('tolaboard/components/fa-list', ['exports', 'ember-font-awesome/components/fa-list'], function (exports, _emberFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaList['default'];
    }
  });
});
define('tolaboard/components/fa-stack', ['exports', 'ember-font-awesome/components/fa-stack'], function (exports, _emberFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaStack['default'];
    }
  });
});
define('tolaboard/components/graph-builder-widget', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({

		showDataSourcePreview: false,
		showVizSelection: false,
		showDataModel: false,
		renderGraph: false,
		fieldIndex: 0,
		filters: [],

		field: _ember['default'].computed('fieldIndex', function () {
			return this.get('scopeData')[this.get('fieldIndex')];
		}),

		// scopeComponent: 'graphs/chartjs-bar',	
		scopeData: [], // placeholder for the data populated by getData action
		scopeGraphID: undefined,
		scopeDataModel: _ember['default'].Object.create(), // holds the current selected graph metadata
		scopeComponent: undefined,

		disableSave: true,
		tolaGraph: { name: 'tolaGraph from tolagraph.js!!!' },

		// wanted to log these hooks running to understand Ember better
		// Ember calls these methods
		didInsertElement: function didInsertElement() {

			// console.log('gbw didInsertElement invoked on gbw',this);
			/*console.log('tbi',this.get('tbItem'));
   console.log('aw',this.get('activeWidget'));
   console.log('aEl',this.get('activeElement'));
   console.log('aIn',this.get('activeIndex'));*/
			var tbItemConfig = this.get('activeTBItemConfig');
			console.log('gbw this ', this);
			// console.log('data sources',this.get('dataSources'));
			// console.log('source id',this.get('activeTBItemConfig').graph.dataSourceId);

			/* if there's an activeTBItemConfig, then there's a selected data source */

			// step 1, show selected data
			if (tbItemConfig) {

				var url = this.get('dataSources')[tbItemConfig.graph.dataSourceId].url;
				this.toggleProperty('showDataSourcePreview');
				// this.set('dataSourceLabel')
				// this.toggleProperty('showVizSelection');

				// this is working... updating scopeData property in callback
				_ember['default'].$.getJSON(url, function (data) {
					self.set('scopeData', data.splice(0, 200));
					self.get('scopeData').map(function (d) {
						delete d.name;
						delete d.spouse;
					});
				});
			}
		},
		didRender: function didRender() {
			// console.log('gbw didRender invoked');
		},

		actions: {

			toggleDataSourcePreview: function toggleDataSourcePreview() {
				this.set('showDataSourcePreview', true);

				var tolagraphConfig = {
					// dataSource: this.
				};

				var tolagraph = Tolagraph.create();
			},

			getData: function getData(url) {
				// console.log('getData called with: ',source);
				var self = this;
				// var url = source.get('url');
				this.set('showDataSourcePreview', true);
				// this.set('dataSourceLabel')
				// this.toggleProperty('showVizSelection');

				// this is working... updating scopeData property in callback
				_ember['default'].$.getJSON(url, function (data) {
					self.set('scopeData', data.splice(0, 200));
					self.get('scopeData').map(function (d) {
						delete d.name;
						delete d.spouse;
					});
				});
			},

			/* manipulates array of filters */
			addFilter: function addFilter() {
				// get max id of current filterArr, add 1, and that's the new id
				var filterArr = this.get('filters'),
				    newID;

				if (filterArr.length === 0) {
					newID = 0;
				} else {
					newID = 1 + Math.max.apply(null, filterArr.map(function (d) {
						return d.id;
					}));
				}
				filterArr.pushObject({ id: newID });
			},
			/* delete filter of matching id */
			deleteFilter: function deleteFilter(id) {
				var filterArr = this.get('filters');
				var index = filterArr.map(function (d) {
					return d.id;
				}).indexOf(id); // index of located id
				filterArr.removeObject(filterArr[index]);
			},
			updateFilter: function updateFilter(id, params) {
				console.log('update filter!!! ', id);
			},
			/* Handles updating the data bound to the dropdown area. When a graph
      is selected (ie. image clicked), the dataModel for the graph type
      is assigned to the data for the dropdown, and the bindings should
      make it update automagically in the view. 
   	   This also takes the columns from the selected data set, and uses
      them to populate the dropdown boxes */
			showGraphDataModel: function showGraphDataModel(graph) {
				// console.log('graph',graph);
				if (!this.get('showDataModel')) {
					this.set('showDataModel', true);
				}

				/* graph is the data model of the selected graph, label is what we want in dropdown */
				this.set('scopeGraphID', graph.id);
				this.set('scopeDataModel', graph.get('dataModel'));
				this.set('scopeComponent', graph.get('component'));
			},

			/* this is really tricky
   The way this should work is that we have a dataModel which is 
   bound to the Ember view for the graph. If the dataModel gets 
   updated with assigned fields for inputs, the graph should render
   via the render-tolaboard-item component. 
   	For this to work, the bound dataModel needs to be an Ember object*/
			tryGraphRender: function tryGraphRender(selectedField) {

				// kind of hacky, but gets the data model field name
				var dataModelFieldName = event.target.name;
				console.log('scopeGraphID', this.get('scopeGraphID'));
				console.log('scopeDataModel', this.get('scopeDataModel'));
				console.log('scopeComponent', this.get('scopeComponent'));

				// console.log(dataModelFieldName,': ',selectedField);

				// find index of selectedField in dataModel

				// console.log(this.get('scopeDataModel'));
				// this.set('scopeDataModel','assigned',selectedField);
				// called when a user defines or changes a graph input field

				// first figure out if there's an existing graph, if so, remove it
				if (this.get('renderGraph')) {}
				// should destroy existing component... calls willDestroyElement
				// this.set('scopeComponent',undefined);	
				// console.log('renderGraph now being set to false');
				/*this.set('renderGraph',true);
    this.set('showDataFilters',true);*/

				// update the data model with assignments
				_ember['default'].set(this.get('scopeDataModel').findBy('name', dataModelFieldName), 'assigned', selectedField);

				var requiredFields = this.get('scopeDataModel').filter(function (item) {
					return item.required === true;
				}).map(function (d) {
					return d.assigned;
				});

				if (requiredFields.indexOf("") === -1) {
					// console.log('renderGraph now being set to true');
					// this.set('renderGraph',true);
					var self = this;
					setTimeout(function () {
						self.set('renderGraph', true);
						self.set('showDataFilters', true);
					}, 250);
					this.toggleProperty('disableSave');
					// this.set('scopeComponent','graphs/chartjs-bar');	
					// this.set('scopeComponent', this.get('graphOptions')[this.scopeGraphID].component);
					// this.actions.showGraphDataModel(this.get('graphOptions')[this.scopeGraphID]);
				}

				// now figure out if we have all the required fields defined
			},

			clearGraphBuilder: function clearGraphBuilder() {

				_ember['default'].$('#data-source-select option:eq(0)').prop('selected', true);
				this.set('showDataSourcePreview', false);
				this.set('showVizSelection', false);
				this.set('showDataModel', false);
				this.set('renderGraph', false);
				this.set('showDataFilters', false);
				this.set('filters', []);
				this.set('scopeData', []);
				this.set('scopeGraphID', undefined);
				this.set('scopeDataModel', {});
				this.set('scopeComponent', undefined);
				this.set('disableSave', true);

				// this.destroyElement();
			},

			didDestroyElement: function didDestroyElement() {
				// console.log('did destroy gbw');
				// this.sendAction('removeItem', this.get('index'));
				/* Once element is destroyed, destroy underlying object
       if this isn't done, didRender keeps running on it.
       	Might also create memory leaks, but not certain.*/
				// this.destroy();
			},

			updateBoardItem: function updateBoardItem() {
				// console.log('attempt to send new updateBoardItem');
				this.sendAction('updateSaveBoardItem', this.get('tolaGraph'));
				// this.sendAction('updateBoardItem');
			}

		}, // end actions

		buildTolagraph: function buildTolagraph() {
			// take existing definitions, and create a tolagraph instance

			var config = {

				dataSource: this.scopeData,
				component: this.scopeComponent

			};
		}

	});
});
define('tolaboard/components/graphs/chartjs-bar', ['exports', 'ember'], function (exports, _ember) {

	/* each type of component or graph which can be rendered in a gridster widget... making up a tolaboard,
    will have its own ember component. This is where the functions for how to draw this particular graph
    will live, and all it needs is the info to get the data for this viz. The element is autoamtic because
    we just use the ember view given along with the .viz class to form a combined css selector
 
    to render a bar graph in chart js, we need:
    1. configuration containing data and labels and colors
    2. dom element, which should be this.get('element') canvas*/
	exports['default'] = _ember['default'].Component.extend({

		self: this,

		dataAgg: _ember['default'].inject.service('data-aggregator'),

		chartConfig: _ember['default'].Object.create(),

		didInsertElement: function didInsertElement() {

			console.log('chartjs bar component ', this);

			var tolaGraphConfig = {
				element: '#scope-viz',
				// data: this.get('graph').config.data.data,
				dataModel: this.get('scopeDataModel')
			};

			/*tolaGraphConfig.metadata = {
       	labelList: this.get('dataAgg').oneDimensionGroupKeys(scopeData, [], scopeDataModel[0].field.assigned),
       	metricList: this.get('dataAgg').oneDimensionSumValues(scopeData, [], scopeDataModel[0].field.assigned, scopeDataModel[1].field.assigned)
       };*/

			tolaGraphConfig.chartConfig = {
				type: 'bar',
				data: {
					labels: ['A', 'B', 'C'],
					datasets: [{
						data: [34, 23, 78],
						backgroundColor: '#00afaa'
					}]
				},
				options: {}
			}; // chartConfig

			/*tolagraphConfig.metadata.metricList = tolagraphConfig.metadata.metricList
     									  .map(function(d) { return d.value; });*/

			// ok, use our master config and create the tolagraph
			// var barGraph = Tolagraph.create(tolaGraphConfig);
			/*barGraph.render = function() {
   	new Chart(this.element, tolaGraphConfig);
   };*/

			// data setup
			var scopeData = this.get('scopeData'),
			    scopeDataModel = this.get('scopeDataModel'),
			    graphConfig = this.get('graphConfig');

			/*var labelList = this.get('dataAgg')
                   .oneDimensionGroupKeys(scopeData, [], scopeDataModel[0].field.assigned);
   
   var metricList = this.get('dataAgg')
                    .oneDimensionSumValues(scopeData, [], 
                    						scopeDataModel[0].field.assigned, 
                    						scopeDataModel[1].field.assigned);
   	metricList = metricList.map(function(d) { return d.value; });*/
			// console.log('bar this', this);

			/*console.log('labelList ',labelList);
   console.log('metricList', metricList);*/

			// test to render a static bar graph

			// var chartElem = Ember.$('#current-builder-widget-graph');

			/*var config = {
      	type: 'bar',
      	data: {
          	labels: labelList,
          	datasets: [{	            	
              	data: metricList,
              	backgroundColor: '#00afaa'
           }]
       },
       options: {}
   };*/

			var fooConfig = {
				type: 'bar',
				data: {
					labels: ['A', 'X', 'C'],
					datasets: [{
						data: [32, 45, 67],
						backgroundColor: '#00afaa'
					}]
				},
				options: {}
			};

			// var graph = new Chart(this.get('element'), fooConfig);

			var ctx = this.$('canvas');

			ctx.resize(function () {
				'resize detected';
			});

			var testChart = new Chart(ctx, fooConfig);
		},

		willDestroyElement: function willDestroyElement() {
			console.log('willDestroyElement on bar chart component called');
		}

	});
});
/*didRender: function() { console.log('chart didRender')},
didReceiveAttrs: function() {console.log('chart didReceiveAttrs')},*/
define('tolaboard/components/graphs/chartjs-pie', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({

		self: this,

		dataAgg: _ember['default'].inject.service('data-aggregator'),
		colorService: _ember['default'].inject.service('color-palette'),

		dataModel: [],

		didInsertElement: function didInsertElement() {

			console.log('pie graph component this', this);

			// persisted config contains metadata for defining data
			var config = this.get('tbItemConfig').graph.config;

			/* data setup...
   	1. obtain data source
   	2. use dataModel to aggregate on assigned fields
   	3. build labels using aggregated data
   	4. build data using aggregated data
   	5. update tbItemConfig.graph.config
   */
			console.log('dataSources in pie?', this, this.get('dataSources'));

			/*var scopeData = this.get('scopeData'),
       scopeDataModel = this.get('scopeDataModel'),
       graphConfig = this.get('graphConfig');*/

			/*var labelList = this.get('dataAgg')
                   .oneDimensionGroupKeys(scopeData, [], scopeDataModel[0].field.assigned);
   
   var metricList = this.get('dataAgg')
                    .oneDimensionSumValues(scopeData, [], 
                    						scopeDataModel[0].field.assigned, 
                    						scopeDataModel[1].field.assigned);
   	metricList = metricList.map(function(d) { return d.value; })*/

			/*var colorList = this.get('colorService')
                   .classicPalette;*/

			// grab the canvas element, which is basically the ember view canvas
			var ctx = this.$('canvas');

			// jquery resize to handle responsiveness on gridster resizing
			ctx.resize(function () {
				'resize detected';
			});

			// render pie chart with chart.js call to Chart()
			var pieChart = new Chart(ctx, config);
		},

		willDestroyElement: function willDestroyElement() {
			console.log('willDestroyElement called');
		}
	});
});
define('tolaboard/components/graphs/leaflet-map', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('tolaboard/components/graphs/test-graph', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({

		didInsertElement: function didInsertElement() {

			console.log('test graph this ', this);

			var config = this.get('tbItemConfig').graph.config;
			/* so rendering inside the widget seemed to just involve grabbing the 
      element, and using jquery to then get the canvas object 
   	   We used the lower level gridster api to allow ember to place the UI
      elements, and then programmatically update the underlying gridster
      $widgets object and register the widget so we got all the functionality
   	   With ember being able to do it's thing, by controlling the view, all
      that was needed was to put a dynamically named component helper call
      inside the render .hbs template, and that automatically gets a canvas
      object inside the ember view, so when rendered it goes along for the ride
      of the ember view and gridster li element. 
   	   So... to make a graph render inside a widget, we need to update the
      data underlying the dynamic component call to the graph*/
			var ctx = this.$('canvas');

			ctx.resize(function () {
				'resize detected';
			});

			var testChart = new Chart(ctx, config);
		}

	});
});
define('tolaboard/components/head-content', ['exports', 'ember', 'tolaboard/templates/head'], function (exports, _ember, _tolaboardTemplatesHead) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    model: _ember['default'].inject.service('head-data'),
    layout: _tolaboardTemplatesHead['default']
  });
});
define('tolaboard/components/head-layout', ['exports', 'ember', 'ember-cli-head/templates/components/head-layout'], function (exports, _ember, _emberCliHeadTemplatesComponentsHeadLayout) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    layout: _emberCliHeadTemplatesComponentsHeadLayout['default']
  });
});
define('tolaboard/components/head-tag', ['exports', 'ember-cli-meta-tags/components/head-tag'], function (exports, _emberCliMetaTagsComponentsHeadTag) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMetaTagsComponentsHeadTag['default'];
    }
  });
});
define('tolaboard/components/head-tags', ['exports', 'ember-cli-meta-tags/components/head-tags'], function (exports, _emberCliMetaTagsComponentsHeadTags) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMetaTagsComponentsHeadTags['default'];
    }
  });
});
define('tolaboard/components/json-2-table', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({

		didRenderCounter: 0,

		didFullyRender: function didFullyRender() {
			// this.set('showVizSelection', true);
		},

		didUpdate: function didUpdate() {
			this.set('showVizSelection', true);
		},

		didRender: function didRender() {
			this.didRenderCounter += 1;
			if (this.didRenderCounter === 2) {
				this.didFullyRender();
			}
		},

		didInsertElement: function didInsertElement() {
			// console.log('didInsertElement on json-2-table invoked');
		}
	});
});
define('tolaboard/components/render-tolaboard-item', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({

		// itemMutable: true,
		/*scopeGraph: Ember.computed(function() {
  	console.log('cp this comp',this.get('tbItemConfig').graph.component);
  	return this.get('tbItemConfig').graph.component;
  }),*/

		/*function() {
  	console.log('this inside comp prop',this);
  	return this.get('tbItemConfig').graph.component
  },*/
		showGraphBuilder: false,

		didInsertElement: function didInsertElement() {

			// console.log('render item index:',this.get('index'));

			/* Same issue here as with tolaboard-item component. Using the higher level API
      doesn't work for ember because it appends the li to the ".gridster ul" selector.
      Need to append to ember view piece by piece like in tb-item
   		   */
			// console.log('render component this',this);
			var el = _ember['default'].$(this.get('element'));

			var grid = _ember['default'].$('.gridster ul');

			// what if I just add new widget at 1,1 with 1,1 size?
			grid.gridster({
				widget_margins: [5, 5],
				widget_base_dimensions: [140, 140],
				resize: { enabled: true,
					stop: function stop(e, ui, $widget) {
						console.log('gridster resize end detected');
					} }
			});

			// API object for dynamic
			grid = grid.gridster().data('gridster');

			// if itemMutable is false...
			if (!this.get('itemMutable')) {

				// disable grid dragging, resizing
				grid.disable();
				grid.disable_resize();
				_ember['default'].$('.gridster ul').gridster({ resize: { enabled: false } });
				_ember['default'].$('.gridster li').css('cursor', 'pointer');
			}

			// get the .hbs template for this instance of the component, set it to thisView
			var thisView = this.get('element').childNodes[0];
			/* above line doesn't work because no li was added during the view
      we could assume an li needs to be added, then follow through as before
      i mean, if edit mode is used, we need that same view with the edit/delete buttons*/
			// var thisView = this.get('element');

			/* NEW APPROACH USING LOW-LEVEL GRIDSTER API'S */

			// .empty_cells(col, row, size_x, size_y);
			// grid.empty_cells(1, 1, 2, 2);
			var widget = this.get('tbItemConfig').widget;

			// add attrs that will activate css so grid is positioned and sized
			_ember['default'].$(thisView).attr({
				'data-col': widget['col'],
				'data-row': widget['row'],
				'data-sizex': widget['size_x'],
				'data-sizey': widget['size_y']
			}).addClass('gs-w');

			// add to $widgets object
			// console.log('grid ', grid);

			grid.$widgets = grid.$widgets.add(thisView);
			console.log('grid widgets', grid.$widgets);

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
		},

		/* willDestroyElement called by the ember run-time when the component is about to
     be destroyed. In this time, we need to clean up the gridster data model, and 
     remove the element from there. Otherwise, we'll have data but no corresponding
     DOM element, and the serialization will be off. */
		willDestroyElement: function willDestroyElement() {

			// get the element
			var removeEl = this.get('element').childNodes;
			/* USE THE API!  Don't remove with just jQuery 
   	   It needs removed from data object too. If you have any
   	   questions if things are going right... check the following
   	   in the console: 
   	   $('.gridster ul').gridster().data('gridster').$widgets
   	   It's the data model for the grid widgets
   	   */
			_ember['default'].$('.gridster ul').gridster().data('gridster').remove_widget(removeEl, function () {
				// add any logic needed after widget removed here if applicable
			});

			// we also need to remove the item from our items array maintained
			// in tolaboard-designer
			this.sendAction('removeTBItem', this.get('index'));
		},

		/* didDestroyElement destroys the underlying Ember object representing the component.
     This is the final step. If this isn't done, didRender keeps running on it.
      Might also create memory leaks, but not certain.*/
		didDestroyElement: function didDestroyElement() {
			// this.sendAction('removeItem', this.get('index'));
			/* Once element is destroyed, destroy underlying object
      if this isn't done, didRender keeps running on it.
      	Might also create memory leaks, but not certain.*/
			this.destroy();
		},

		actions: {

			activateGraphBuilder: function activateGraphBuilder() {
				/*console.log('tbItem:',this.get('tbItemConfig'));
    console.log('widget',this.get('tbItemConfig').widget);
    console.log('thisView',this.get('element').childNodes[0]);*/

				// this.sendAction('activateGraphBuilder');
				this.set('showGraphBuilder', true);

				this.sendAction('setActiveTBItemConfig', this.get('tbItemConfig'));
				this.sendAction('setActiveElement', this.get('element').childNodes[0]);
				this.sendAction('setActiveIndex', this.get('index'));
				// this.sendAction('setActiveWidget','fooWidget');
			},
			/* runGraphBuilderWidget action is called by the edit button, if applicable. 
      This is currently only the case for the designer component. */
			runGraphBuilderWidget: function runGraphBuilderWidget() {
				/* the modal will actually display the builder, but anything
       needed to run at this stage in tb-item goes here */
				this.sendAction('setActiveItem', this.get('elementId'));
			},
			/*appendContent: function(tolagraph) {
   	// called via sendAction in graph-builder-widget component
   	console.log('appendContent', tolagraph);
   },*/
			deleteWidget: function deleteWidget() {
				console.log(this);
				/* deleteWidget - as with runGraphBuilderWidget, only needed in edit mode when
       the trashcan button is available. This action destroys the component */
				this.destroyElement();
			}
		}
	});
});
define('tolaboard/components/tolaboard-designer', ['exports', 'ember'], function (exports, _ember) {

	var TBoard = _ember['default'].Object.extend({
		title: 'Some Generic Title',
		dashboard: []
	});

	exports['default'] = _ember['default'].Component.extend({
		showDesigner: false,
		showGridLayout: false,
		showGraphBuilder: false,
		foo: { bar: 34 },

		currentDashboard: function currentDashboard() {
			return this.get('model').testTB;
		},
		/* array of tolaboard-items (ie. gridster widgets) */
		/*tolaboardItems: Ember.computed(function() {
  	return this.get('model').tolaboard.responseJSON.dashboard;
  }),*/

		/* fires when tolaboard-designer.hbs has loaded */
		didInsertElement: function didInsertElement() {
			// console.log('tb-designer object',this);	

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

		willDestroyElement: function willDestroyElement() {
			// console.log('will destroy in layout called');
		},

		/* Next section (prior to actions) contains methods for persisting tolaboard 
  	   saveTolaBoard - called from action updateSaveTolaBoard
     getSerializedWidgets - get JSON serialization of gridster 
     getSerializedGraphs - ditto but for tolagraphs
  */
		saveTolaBoard: function saveTolaBoard() {
			/*console.log('serialize and persist tolaboard');
   console.log(this.getSerializedWidgets());*/
		},

		getSerializedWidgets: function getSerializedWidgets() {
			return $('.gridster ul').gridster().data('gridster').serialize();
		},

		getSerializedGraphs: function getSerializedGraphs() {
			// iterate $tolagraphs on gridster object and return object array
		},

		getJSONString: function getJSONString(obj) {
			// return json-ized string of obj
		},

		actions: {
			createNewBoard: function createNewBoard() {
				// check state to see if we're already in current or new board

				// if nothing, create new board object, assign to model, ie currBoard
				var currBoard = TBoard.create();
				this.set('currBoard', currBoard);

				// show board design window
				this.set('showDesigner', true);

				// if new or existing exists, prompt, save, wipe out and call createNewBoard
			},

			addItem: function addItem() {
				// wrap this in a try throw catch
				// seems like an error occurs and prevents the full api from running
				// we need this to be atomic
				console.log('tb designer this', this);
				// console.log(this.get('model'));
				/* if the dynamic segment for the route is 'new', then
       we have an emplty dashboard, with no items. Need to have items
       be an empty array in this case*/
				// replace this with something that appends at bottom of existing grid	
				var obj = { "widget": { "col": 1, "row": 1, "size_x": 2, "size_y": 2 },
					"graph": {}
				};

				// push new dashboard item into model.items
				var curItems = this.get('model').dashboard.get('items');

				console.log('curItems', curItems);
				curItems.pushObject(obj);
			},
			removeItem: function removeItem(index) {
				// console.log('removeItem index',index);
				var curItems = this.get('model').dashboard.get('items');
				// console.log('remove from curItems',curItems);
				curItems.removeObject(curItems[index]);
				// push item into tolaboardItems array			
				// this.tolaboardItems.pushObject(newID);			
				// this.tolaboardItems.removeObject(index);
				// console.log('removeItem called by tb-item via sendAction');
			},
			/* this action needs passed into any child component which needs to display the
      graph builder widget */
			activateGraphBuilder: function activateGraphBuilder() {
				if (!this.showGraphBuilder) {
					this.set('showGraphBuilder', true);
				}
				/*console.log('current items:');
    console.log(this.get('model').dashboard.get('items'));*/
			},

			setActiveTBItemConfig: function setActiveTBItemConfig(tbItemConfig) {
				this.set('activeTBItemConfig', tbItemConfig);
				console.log('tb-designer.activeTBItemConfig', this.get('activeTBItemConfig'));
			},
			setActiveElement: function setActiveElement(element) {
				this.set('activeElement', element);
				// console.log('tb-designer.element',element);
			},
			setActiveIndex: function setActiveIndex(index) {
				this.set('activeIndex', index);
				// console.log('tb-designer.index',index);
			},

			updateSaveBoardItem: function updateSaveBoardItem(tolagraph) {
				/*console.log('update li with tolagraph');
    console.log(Ember.$('#' + this.get('activeItem') + ' li'));
    console.log(tolagraph);*/

				// render the tolagraph in the active li
				// update $tolagraphs object array

				this.saveTolaBoard();
			}

		}
	});
});
define('tolaboard/components/tolaboard-grid', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		dashboardA: { layout: [{ col: 1, row: 1, size_x: 1, size_y: 1 }, { col: 4, row: 1, size_x: 2, size_y: 2 }, { col: 2, row: 3, size_x: 4, size_y: 2 }, { col: 1, row: 2, size_x: 1, size_y: 1 }, { col: 2, row: 1, size_x: 2, size_y: 2 }],
			graphs: ['public/demo/graphs/dial1.png'] },
		graphsA: [{ link: 'test' }, { link: 'test' }, { link: 'test' }, { link: 'test' }],
		testVal: 'foo',

		didInsertElement: function didInsertElement() {
			// console.log('draw the grid');

			_ember['default'].$(".gridster ul").gridster({
				widget_margins: [5, 5],
				widget_base_dimensions: [140, 140],
				resize: { enabled: true }
			});

			// API object for dynamic
			var gridDynamic = _ember['default'].$("#dashboard ul").gridster().data('gridster');
			this.dashboardA.layout.map(function (d) {
				gridDynamic.add_widget('<li>&nbsp;&nbsp; test</li>', d['size_x'], d['size_y'], d['col'], d['row']);
			});
		}

	});
});
define('tolaboard/components/tolaboard-item', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({

		/* fires when component comes into existance in the DOM */
		/*init: function() { 
  	this._super(...arguments);
  	console.log('init called');
  },*/
		didInsertElement: function didInsertElement() {

			/*console.log('tb-item didInsertElement invoked');
   console.log('index of item is ', this.get('index'));*/
			/* Gridster meets Ember
   Kinda tricky because gridster likes adding the html, for 3 reasons..
   1. adds data attrs so css knows how to size grids
   2. adds events to make html elements draggable, resizeable
   3. maintains a data model for the grid in a js object
   	In typical ember.js, the view template is added natively by the 
   simple inclusion of the component helper in the view. Any logic is
   handled by the corresponding js file.
   	So we have a view for a our li and all the actions, but no gridster
   logic tied to it... so it doesn't work.
   	Ideally, only data... add_to_gridmap ?
   	*/

			// get the gridster object and max/min col and row
			var grid = _ember['default'].$('.gridster ul');

			// what if I just add new widget at 1,1 with 1,1 size?
			grid.gridster({
				widget_margins: [5, 5],
				widget_base_dimensions: [140, 140],
				resize: { enabled: true }
			});

			// API object for dynamic
			grid = grid.gridster().data('gridster');

			// get the .hbs template for this instance of the component, set it to thisView
			var thisView = this.get('element').childNodes[0];

			/* NEW APPROACH USING LOW-LEVEL GRIDSTER API'S */

			// .empty_cells(col, row, size_x, size_y);
			grid.empty_cells(1, 1, 2, 2);

			// add attrs that will activate css so grid is positioned and sized
			_ember['default'].$(thisView).attr({
				'data-col': 1,
				'data-row': 1,
				'data-sizex': 2,
				'data-sizey': 2
			}).addClass('gs-w');

			// add to $widgets object
			// console.log('grid ', grid);
			grid.$widgets = grid.$widgets.add(thisView);

			// register
			grid.register_widget($(thisView));

			// remaining bits
			grid.add_faux_rows(2);
			grid.set_dom_grid_width();
			grid.set_dom_grid_height();
			grid.drag_api.set_limits(grid.cols * grid.min_widget_width);
		},

		didRender: function didRender() {
			// console.log('tb-item didRender invoked');

		},
		willDestroyElement: function willDestroyElement() {

			// console.log('willDestroyElement invoked');
			var removeEl = this.get('element').childNodes;
			/* USE THE API!  Don't remove with just jQuery 
   	   It needs removed from data object too. If you have any
   	   questions if things are going right... check the following
   	   in the console: 
   	   $('.gridster ul').gridster().data('gridster').$widgets
   	   It's the data model for the grid widgets
   	   */
			_ember['default'].$('.gridster ul').gridster().data('gridster').remove_widget(removeEl, function () {
				// add any logic needed after widget removed here
			});
		},

		didDestroyElement: function didDestroyElement() {
			this.sendAction('removeItem', this.get('index'));
			/* Once element is destroyed, destroy underlying object
      if this isn't done, didRender keeps running on it.
      	Might also create memory leaks, but not certain.*/
			this.destroy();
		},

		actions: {
			runGraphBuilderWidget: function runGraphBuilderWidget() {
				/* the modal will actually display the builder, but anything
       needed to run at this stage in tb-item goes here */
				this.sendAction('setActiveItem', this.get('elementId'));
			},
			/*appendContent: function(tolagraph) {
   	// called via sendAction in graph-builder-widget component
   	console.log('appendContent', tolagraph);
   },*/
			deleteWidget: function deleteWidget() {
				/* start the process of removing the component 
       this will call willDestroyElement and then
       didDestroyElement */
				// console.log('calling destroyElement');
				// console.log(this);
				this.destroyElement();

				// var parentLI = this.get('element').childNodes[0];

				/* gridster takes about half a second to delete the widget
       and it's annoying... so we'll hide it right away while
       waiting for remove_widget to complete */
				// Ember.$(parentLI).css('visibility','hidden');
			}
		}
	});
});
define('tolaboard/components/tolaboard-layout', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({

		self: this,
		showGraphBuilder: false,
		tolaboard: function tolaboard() {
			return this.get('model').tolaboard.responseJSON;
		},

		/* array of tolaboard-items (ie. gridster widgets) */
		tolaboardItems: function tolaboardItems() {
			return this.get('model').tolaboard.responseJSON.dashboard;
		},

		activeGraphBuilder: [],
		graphTarget: [],

		didInsertElement: function didInsertElement() {
			console.log('model passed to layout component', this.get('model'));
			console.log('tolaBoardItems', this.get('tolaboardItems'));

			// new tolaboard
			/*var tBoard = Tolaboard.create();
   console.log('new tBoard',tBoard);*/
		},

		willDestroyElement: function willDestroyElement() {
			// console.log('will destroy in layout called');
		},

		/* Next section (prior to actions) contains methods for persisting tolaboard 
  	   saveTolaBoard - called from action updateSaveTolaBoard
     getSerializedWidgets - get JSON serialization of gridster 
     getSerializedGraphs - ditto but for tolagraphs
  */
		saveTolaBoard: function saveTolaBoard() {
			console.log('serialize and persist tolaboard');
			console.log(this.getSerializedWidgets());
		},

		getSerializedWidgets: function getSerializedWidgets() {
			return $('.gridster ul').gridster().data('gridster').serialize();
		},

		getSerializedGraphs: function getSerializedGraphs() {
			// iterate $tolagraphs on gridster object and return object array
		},

		getJSONString: function getJSONString(obj) {
			// return json-ized string of obj
		},

		actions: {
			addItem: function addItem() {
				// push item into tolaboardItems array
				/*var newID = this.tolaboardItems.length;
    this.tolaboardItems.pushObject(newID);*/

				// just toggle showGraphBuilder once
				/*if(!this.showGraphBuilder) { 
    	this.set('showGraphBuilder',true);
    }*/
				console.log('currBoard', this.get('currBoard'));
			},
			removeItem: function removeItem(index) {
				// push item into tolaboardItems array			
				// this.tolaboardItems.pushObject(newID);			
				this.tolaboardItems.removeObject(index);
				// console.log('removeItem called by tb-item via sendAction');
			},
			setActiveItem: function setActiveItem(el) {
				this.set('activeItem', el);
				console.log('gbw open on ', _ember['default'].$('#' + el));
			},

			updateSaveBoardItem: function updateSaveBoardItem(tolagraph) {
				console.log('update li with tolagraph');
				console.log(_ember['default'].$('#' + this.get('activeItem') + ' li'));
				console.log(tolagraph);

				// render the tolagraph in the active li
				// update $tolagraphs object array

				this.saveTolaBoard();
			}

		} // end actions object,

	});
});
define('tolaboard/controllers/application', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({

		session: _ember['default'].inject.service(),

		validateToken: function validateToken() {
			return new Promise(function (resolve, reject) {
				_ember['default'].$.ajax({
					method: "POST",
					url: '//localhost:2021/session'

				}).then(function (data) {
					console.log('data from token validator', data);
					resolve();
				}, function () {
					reject('promise rejection');
				});
			});
		},

		init: function init() {
			var _this = this;

			/* token auth */
			console.log('application.js init invoked');
			var appToken = Cookies.get('appToken');

			if (appToken) {
				var result = this.get('session').initializeFromCookie();
				result.then(function (data) {
					_this.transitionToRoute('mydashboards');
				}, function () {
					Cookies.remove('appToken');
					/*this.set('session','currUser',null)
     this.set('session','isLoggedIn',false)*/
					_this.transitionToRoute('login');
				});
				/* if the cookie has a token, give the session cookie initializer a crack at it */
				/*var response = this.get('validateToken')();
    console.log('response from validateToken',response)
    	response.then((data)=>{
    	console.log('appToken success validate')
    	// success - initialize and define session currentUser, login 
    	var session = this.get('session');
    	var currUser = Ember.Object.create();
    	currUser.set('fullName', data.name);
    	currUser.set('picture', data.picture);
    	currUser.set('email', data.email);
           currUser.set('userId', data.email.split('@')[0]);
            session.set('currentUser', currUser);
           session.set('isLoggedIn', true);
            this.transitionToRoute('mydashboards')
           this.res
    }, ()=>{
    	console.log('appToken fail validate')
    	// failure - assuming bad or expired token, redirect to login 
    	// cleanup to be sure
    	var session = this.get('session');
    	Cookies.remove('appToken')
    	session.set('session','currentUser',null)
    	session.set('session','isLoggedIn',false)
    	// redirct to where user can authenticate
    	this.transitionToRoute('login')
    })*/
			} else {
					/* No token/auth, perform some cleanup, redirect to login*/
					console.log('session from application.js', this.get('session'));
					// cleanup to be sure
					console.log('app controller', this);
					/*this.get('session','currentUser',null)
     this.set('session','isLoggedIn',false)*/
					// redirct to where user can authenticate
					this.transitionToRoute('login');
				}
		}

	});
});
/* applicaiton.js controller is for application level processes needed when the app loads */
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
define('tolaboard/controllers/login', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({

		session: _ember['default'].inject.service(),

		/* This is kinda kludgy, and is basically setup to allow google to talk to our app
  	Overview: We need to define a callback for google signin to call once the user is authenticated.
  This is defined in the data-onSuccess attribute for the button. My first approach was to place this
  call back in the actions, and reference with the action helper syntax. However, our app is not invoking
  this function... Google is.  So it just need to live in the DOM somehow. The method below injects a raw
  javascript function into the DOM via calling a function that defines the callback, and places it in the
  global scope (window) */

		createSignInFunc: function createSignInFunc(ctrl) {

			var onSignIn = function onSignIn(googleUser) {
				// Useful data for your client-side scripts:
				var profile = googleUser.getBasicProfile();

				// The ID token to pass to the backend:
				var id_token = googleUser.getAuthResponse().id_token;
				console.log("ID Token: " + id_token);
				// ctrl.set('id_token',id_token);
				// Cookies.set('googleToken',id_token);

				console.log('call session login with token');
				ctrl.get('session').gLogin(id_token);

				// POST auth token

				/*$.post("/", id_token, function(data, status){
     console.log('client:',data);
     console.log(status);
    });*/
			};

			// assign our sign in method to global
			window.onSignIn = onSignIn;

			// another hack... make the google signout accessable from any where
			window.googleSignOut = function () {
				var auth2 = gapi.auth2.getAuthInstance();
				auth2.signOut().then(function () {
					console.log('User signed out.');
				});
			};
		},

		init: function init() {
			this._super.apply(this, arguments);

			// pass this controller into our hacky signin, so we can put google token inside
			this.get('createSignInFunc')(this);
		} // end init

	});
});
define('tolaboard/helpers/is-eq', ['exports', 'ember'], function (exports, _ember) {
  exports.isEq = isEq;

  function isEq(params /*, hash*/) {
    return params[0] === params[1];
  }

  exports['default'] = _ember['default'].Helper.helper(isEq);
});
define('tolaboard/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('tolaboard/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('tolaboard/initializers/ajax-prefilter', ['exports'], function (exports) {
  exports.initialize = initialize;
  /* Initializer that runs for every ajax request within app */

  function initialize(application) {
    Ember.$.ajaxPrefilter(function (options, originalOptions, jqXHR) {

      var token = Cookies.get('appToken');

      if (token) {
        jqXHR.setRequestHeader('xhrFields', { withCredentials: true });
        jqXHR.setRequestHeader('Authorization', token);
      } else {
        console.log('no token in ajax-prefilter');
        // console.log(application)
      }
    });
  }

  exports['default'] = {
    name: 'ajax-prefilter',
    initialize: initialize
  };
});
define('tolaboard/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'tolaboard/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _tolaboardConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_tolaboardConfigEnvironment['default'].APP.name, _tolaboardConfigEnvironment['default'].APP.version)
  };
});
define('tolaboard/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('tolaboard/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('tolaboard/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('tolaboard/initializers/export-application-global', ['exports', 'ember', 'tolaboard/config/environment'], function (exports, _ember, _tolaboardConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_tolaboardConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _tolaboardConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_tolaboardConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('tolaboard/initializers/head-tags', ['exports', 'ember', 'ember-cli-meta-tags/instance-initializers/head-tags'], function (exports, _ember, _emberCliMetaTagsInstanceInitializersHeadTags) {
  exports.initialize = initialize;

  if (_ember['default'].Application.instanceInitializer) {
    _ember['default'].Application.instanceInitializer(_emberCliMetaTagsInstanceInitializersHeadTags['default']);
  }

  function initialize() {
    var application = arguments[1] || arguments[0];
    var container = application.__container__;
    application.inject('service:head-tags', 'router', 'router:main');

    // Ember >= 1.12
    if (application.instanceInitializer) {
      return;
    }

    // Ember < 1.12
    _emberCliMetaTagsInstanceInitializersHeadTags['default'].initialize(container);
  }

  exports['default'] = {
    name: 'head-tags',
    initialize: initialize
  };
});
define('tolaboard/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('tolaboard/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('tolaboard/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('tolaboard/instance-initializers/browser/head', ['exports', 'ember', 'tolaboard/config/environment'], function (exports, _ember, _tolaboardConfigEnvironment) {
  exports.initialize = initialize;

  function initialize(instance) {
    if (_tolaboardConfigEnvironment['default']['ember-cli-head'] && _tolaboardConfigEnvironment['default']['ember-cli-head']['suppressBrowserRender']) {
      return true;
    }

    // clear fast booted head (if any)
    _ember['default'].$('meta[name="ember-cli-head-start"]').nextUntil('meta[name="ember-cli-head-end"] ~').addBack().remove();
    var container = instance.lookup ? instance : instance.container;
    // const renderer = container.lookup('renderer:-dom');
    var component = container.lookup('component:head-layout');
    component.appendTo(document.head);
  }

  exports['default'] = {
    name: 'head-browser',
    initialize: initialize
  };
});
define("tolaboard/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('tolaboard/models/dashboard', ['exports', 'ember-data/model', 'ember-data'], function (exports, _emberDataModel, _emberData) {
	// import attr from 'ember-data/attr';
	// import { belongsTo, hasMany } from 'ember-data/relationships';

	var attr = _emberData['default'].attr;

	exports['default'] = _emberData['default'].Model.extend({

		title: attr('string'),
		items: attr()

	});
});
define('tolaboard/models/datasource', ['exports', 'ember-data/model', 'ember-data'], function (exports, _emberDataModel, _emberData) {
	// import attr from 'ember-data/attr';
	// import { belongsTo, hasMany } from 'ember-data/relationships';

	var attr = _emberData['default'].attr;

	exports['default'] = _emberDataModel['default'].extend({
		label: _emberData['default'].attr('string'),
		url: _emberData['default'].attr('string')

	});
});
define('tolaboard/models/graph-option', ['exports', 'ember-data/model', 'ember-data'], function (exports, _emberDataModel, _emberData) {
	// import attr from 'ember-data/attr';
	// import { belongsTo, hasMany } from 'ember-data/relationships';

	var attr = _emberData['default'].attr;

	exports['default'] = _emberDataModel['default'].extend({
		label: _emberData['default'].attr('string'),
		img: _emberData['default'].attr('string'),
		component: _emberData['default'].attr('string'),
		dataModel: _emberData['default'].attr()

	});
});
define('tolaboard/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('tolaboard/router', ['exports', 'ember', 'tolaboard/config/environment'], function (exports, _ember, _tolaboardConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _tolaboardConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('mydashboards');
    this.route('datasources');

    /* Ember can't do optional dynamic segments :( 
    	First designer route goes to empty designer with options for
    	editing existing or building new.
    	Routes to editing an existing Tolaboard use the dynamic segment */
    // this.route('designer');

    /* ok, new approach... same dynamic segment route, but id=0 means new
      designer model now needs to retrieve the JSON for the tolaboard if id <> 0
      Then designer calls layout and passes in the model
      If the id is not 0, then we display the tolaboard in edit mode */

    this.route('sharedboards');
    this.route('dashboard-view', { path: '/dashboard-view/:tolaboard_id' });
    this.route('dashboards', { path: '/dashboards/:tolaboard_id' });
    this.route('graph-options');
    this.route('login');
  });

  exports['default'] = Router;
});
define('tolaboard/routes/dashboard-view', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		session: _ember['default'].inject.service(),
		beforeModel: function beforeModel() {

			if (this.get('session').isLoggedIn === "false") {
				this.transitionTo('login');
			}
		},

		model: function model(params) {

			var url = "assets/data/tolaboards/collection-tolaboards.json";

			return this.store.findRecord('dashboard', params.tolaboard_id);
		}

	});
});
define('tolaboard/routes/dashboards', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({

		session: _ember['default'].inject.service(),
		beforeModel: function beforeModel() {

			if (this.get('session').isLoggedIn === "false") {
				this.transitionTo('login');
			}
		},
		/*model: function(params) {
  	// super easy hack, just use ajax calls, load into one big model
  	var modelObj = {};
  		Ember.$.getJSON('assets/data/data-sources.json', function(data) {			
  		Ember.set(modelObj,'dataSources',data);
  	});
  		Ember.$.getJSON('assets/data/graph-options.json', function(data) {
  		Ember.set(modelObj,'graphOptions',data);
  	});
  }*/

		// this one almost works and uses the store... figure out promises
		model: function model(params) {

			// always use Ember objects, not simple js ones
			var modelObj = _ember['default'].Object.create();

			// data sources and graph options are same for all routes
			modelObj.set('datasources', this.store.findAll('datasource'));
			modelObj.set('graphOptions', this.store.findAll('graph-option'));

			if (params.tolaboard_id !== 'new') {

				modelObj.set('dashboard', this.store.findRecord('dashboard', params.tolaboard_id));
			} else {
				// it's new... we need empty object to add items to
				var dummyObj = _ember['default'].Object.create();
				dummyObj.set('items', []);
				modelObj.set('dashboard', dummyObj);
			}

			console.log('modelObj', modelObj);
			return modelObj;
		}
		/*model: function(params) {
  	
  	var modelObj = {};
  	Ember.set(modelObj,'tbID',params);
  	Ember.set(modelObj,'testArr',[34,45,56]);
  		Ember.set(modelObj,'testTB',{
  		"id": 0,
  		"title": "RRIMA Primary Dashboard",
  		"dashboard": [{"widget": {"col":4,"row":1,"size_x":3,"size_y":3},
  					   "graph": {"component": "graphs/test-graph", "data": [], 
  					   				 "config" : {"type": "bar",
  					   				 			 "data": {
  					   				 			 	"labels": ["A", "B", "C"],
  					   				 			 	"datasets": [{
  					   				 			 		"data": [34,23, 78],
  					   				 			 		"backgroundColor": "#00afaa"
  					   				 			 		}]
  					   				 			 	},
  					   				 			 	"options": {}
  					   				 		}
  					   				 	}
  					   		},
  						   	{"widget": {"col":1,"row":1,"size_x":3,"size_y":2},
  					   "graph": {"component": "graphs/test-graph", "data": [], 
  					   				 "config" : {"type": "bar",
  					   				 			 "data": {
  					   				 			 	"labels": ["X", "Y", "Z"],
  					   				 			 	"datasets": [{
  					   				 			 		"data": [34,34, 34],
  					   				 			 		"backgroundColor": "steelblue"
  					   				 			 		}]
  					   				 			 	},
  					   				 			 	"options": {}
  					   				 		}
  					   				 	}
  					   		}]
  	});
  		if(params.tolaboard_id === 'new') {
  		Ember.set(modelObj,'testTB',{dashboard:[]});
  	}
  		Ember.set(modelObj,'dataSources',[1,2,3]);
  	Ember.set(modelObj,'graphOptions',[]);
  		// get the board, special case... id === 'new', don't retrieve anything		
  	if(params.tolaboard_id !== 'new') {
  		var url = "assets/data/tolaboards/demo-board-" + 
  		          params.tolaboard_id + '.json';
  			Ember.set(modelObj, 'tolaboard', Ember.$.getJSON(url, function(data) {			
  			console.log('designer model ready');
  				return data;
  		}));		
  	}
  	
  		// first attempt... use static json file storing data sources
  	// this becomes a property on the model associated with the designer route
  	// the model is passed to the component via injection via the {{}} syntax
  	// when the component is inserted into the designer.hbs template
  		
  	Ember.$.getJSON('assets/data/data-sources.json', function(data) {			
  		Ember.set(modelObj,'dataSources',data);
  	});
  		Ember.$.getJSON('assets/data/graph-options.json', function(data) {
  		Ember.set(modelObj,'graphOptions',data);
  	});
  		console.log('model fn in designer done', modelObj);
  		return modelObj;
  	}*/
	});
});
define('tolaboard/routes/datasources', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({

		/*session: Ember.inject.service(),
  beforeModel: function() {
  	console.log('beforeModel in application.js')
  	if(this.get('session').isLoggedIn === "false") {
  		this.transitionTo('login');
  	}
  }*/
	});
});
define('tolaboard/routes/graph-options', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('tolaboard/routes/login', ['exports', 'ember', 'ember-inject-script'], function (exports, _ember, _emberInjectScript) {
	exports['default'] = _ember['default'].Route.extend({

		/*session: Ember.inject.service(),
  beforeModel: function() {
  	// console.log('beforeModel on login route invoked', this.get('session').isLoggedIn);
  	if(this.get('session').isLoggedIn==='true' || this.get('session').isLoggedIn === true) {
  		console.log('login route detected session',this.get('session'))
  		this.transitionTo('mydashboards');
  	}
  },*/

		/* https://www.npmjs.com/package/ember-cli-meta-tags*/
		headTags: [{ type: 'meta',
			// tagId: 'name',
			attrs: {
				name: 'google-signin-scope',
				content: 'profile email'
			} /*,
     // optional element content 
     content: 'Element content here'*/
		}, { type: 'meta',
			// tagId: 'name',
			attrs: {
				name: 'google-signin-client_id',
				content: '469831917669-hi4tku7ob2j0k5tapf8856225q2hk7lr.apps.googleusercontent.com'
			} }],

		init: function init() {
			this._super.apply(this, arguments);

			// kludgy way to inject google script, perhaps a cli add-on will exist someday
			var scriptIsLoaded = $("script[src='//apis.google.com/js/platform.js']")[0];
			if (!scriptIsLoaded) {
				(0, _emberInjectScript['default'])("//apis.google.com/js/platform.js").then(function () {});
			}
		}

	});
});
/* Handles the single-signon using Google's oAuth2 

   The template contains the intro to TolaBoard, along with the google button.
   User clicks, and gets prompted by google to verify sharing of info with app.
   js file needs to ta
   */
define('tolaboard/routes/mydashboards', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({});
});
define('tolaboard/routes/sharedboards', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('tolaboard/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('tolaboard/services/color-palette', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Service.extend({

		mutedPalette: ['#796300', '#7A3500', '#10A400', '#9E0060', '#CF102E', '#DB5E11', '#0B8D70', '#1F7400', '#4BC4BF', '#082A73', '#9B8000', '#FF7100', '#FFD200', '#FFFD00', '#6F0AAB', '#9650C0', '#E89424', '#7F7F7F', '#C5000A', '#1F6295'],

		classicPalette: d3.scale.category20().range()
	});
});
define('tolaboard/services/data-aggregator', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Service.extend({

		/* clients of this service will pass data, filter, grouping and sum
     fields via arrays. Then this service returns a js object with
     results aggregated and ready for use */
		aggregator: function aggregator(data, filterArr, groupByArr, sumArr) {},

		oneDimensionGroupKeys: function oneDimensionGroupKeys(data, filterArr, groupField) {
			return d3.set(data.map(function (d) {
				return d[groupField];
			})).values();
		},

		oneDimensionSumValues: function oneDimensionSumValues(data, filterArr, groupName, sumName) {

			var nest = d3.nest().key(function (d) {
				return d[groupName];
			}).rollup(function (rows) {
				return d3.sum(rows, function (d) {
					return d[sumName];
				});
			}).entries(data);

			return nest;
		}
	});
});
define('tolaboard/services/head-data', ['exports', 'ember-cli-head/services/head-data'], function (exports, _emberCliHeadServicesHeadData) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliHeadServicesHeadData['default'];
    }
  });
});
define('tolaboard/services/head-tags', ['exports', 'ember-cli-meta-tags/services/head-tags'], function (exports, _emberCliMetaTagsServicesHeadTags) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMetaTagsServicesHeadTags['default'];
    }
  });
});
define('tolaboard/services/session', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Service.extend({

		routing: _ember['default'].inject.service('-routing'),
		// currentUser: null,
		isLoggedIn: false,
		currentUser: null,

		gLogin: function gLogin(googleToken) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_ember['default'].$.ajax({
					method: "POST",
					url: '//localhost:2021/auth',
					headers: {
						"Content-Type": "application/json",
						"Authorization": googleToken
					}
				}).then(function (data) {
					console.log('google auth success!!');
					// success... data contains google info on user plus our application token
					// set cookies, then call initializer to build session
					// console.log('successful google auth', data)
					Cookies.set('appToken', data.appToken);
					Cookies.set('googleToken', data.googleToken);

					// at this point, we know we have a good appToken, so attempt init again
					_this.initializeFromCookie();

					/*var currUser = Ember.Object.create();
     this.set('currentUser', 'fullName', data.name);
     this.set('currentUser', 'picture', data.picture);
     this.set('currentUser', 'email', data.email);
     this.set('currentUser', 'userId', data.email.split('@')[0]);
      this.set('appToken', data.appToken);*/
					/*currUser.set('fullName', data.name),
     currUser.set('email', data.email),
     currUser.set('userId', data.email.split('@')[0]),
     currUser.set('picture', data.picture)*/
					// console.log(currUser)

					// this.set('currentUser', currUser)
					/*this.set('isLoggedIn', true)
     console.log('ember session...', this)*/

					// assign session vars
					// this.set('isLoggedIn', true);	       
					// this.set('currentUser', currUser);

					// this.initializeFromCookie()

					resolve();
				}, function () {
					reject('Unable to authenticate with Google Sign-In');
				});
			});
		},
		/* takes an app token, and attempts to validate 
     success returns user info
     failure returns 401 
  */
		/*validateAppToken(){
    return new Promise((resolve, reject)=>{
      Ember.$.ajax({
        method: "POST",
        url: '//localhost:2021/session'
        
        
      }).then((data)=>{
        console.log('data from token validator', data)
        console.log('appToken good!!!!! make session')
        var currUser = Ember.Object.create();
        // console.log('currUser',currUser)
        // console.log(data.name, ', ', data.email)
  currUser.set('fullName', data.name);
  currUser.set('picture', data.picture);
  //currUser.set('email', data.email);
     //currUser.set('userId', data.email.split('@')[0]);
      console.log('this atm is...',this)
     session.set('currentUser', currUser);
     session.set('isLoggedIn', true);
      session.transitionToRoute('mydashboards')
         resolve()
      }, ()=>{
        reject('promise rejection')
      })
    })
  },*/

		getSession: function getSession(appToken) {
			var _this2 = this;

			return new Promise(function (resolve, reject) {
				_ember['default'].$.ajax({
					method: "POST",
					url: '//localhost:2021/auth/session'
				}). /*headers: { 
        	"Content-Type": "application/json",
        	"Authorization": googleToken
        }        */
				then(function (data) {
					// set cookies, then call initializer to build session
					console.log('successful session auth', data);

					var currUser = _ember['default'].Object.create();
					currUser.set('fullName', data.fullName);
					currUser.set('email', data.email);
					currUser.set('userId', data.userId);
					currUser.set('picture', data.picture);

					_this2.set('currentUser', currUser);
					_this2.set('isLoggedIn', true);
					// console.log('ember session...', this)

					resolve();
				}, function () {
					_this2.logout();
					reject('Username and password did not match');
				});
			});
		},

		logout: function logout() {
			var appController = this; // that's what called it
			console.log('app controller..', this);
			var session = appController.get('session');
			session.set('currentUser', null);
			session.set('isLoggedIn', false);
			// Cookies.set('isLoggedIn',false);
			// Cookies.remove('currentUser');
			Cookies.remove('googleToken');
			Cookies.remove('appToken');

			window.googleSignOut();
			window.location.reload(true);
			appController.transitionToRoute('login');

			// this.transitionTo('login')
		},

		// called from anything that needs to create a session from our cookie token
		initializeFromCookie: function initializeFromCookie() {
			var _this3 = this;

			return new Promise(function (resolve, reject) {
				_ember['default'].$.ajax({
					method: "POST",
					url: '//localhost:2021/auth/session'
					/* NOTE: header with token handled by ajax-prefilter.js initializer */

				}).then(function (data) {
					// console.log('data from token validator', data)
					console.log('appToken good!!!!! make session', _this3);
					var currUser = _ember['default'].Object.create();
					// console.log('currUser',currUser)
					// console.log(data.name, ', ', data.email)
					currUser.set('fullName', data.name);
					currUser.set('picture', data.picture);
					currUser.set('email', data.email);
					currUser.set('userId', data.email.split('@')[0]);

					// console.log('this atm is...',this)
					_this3.set('currentUser', currUser);
					_this3.set('isLoggedIn', true);

					_this3.get("routing").transitionTo("mydashboards");

					resolve();
				}, function () {
					reject('promise rejection');
					// this.transitionTo('login')
				});
			});
		}

	});
});
define("tolaboard/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 24,
                "column": 16
              },
              "end": {
                "line": 24,
                "column": 58
              }
            },
            "moduleName": "tolaboard/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Weekly Snapshot");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 25,
                "column": 16
              },
              "end": {
                "line": 25,
                "column": 63
              }
            },
            "moduleName": "tolaboard/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Beneficiary Info");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 26,
                "column": 16
              },
              "end": {
                "line": 26,
                "column": 59
              }
            },
            "moduleName": "tolaboard/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Refugee Flow");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 27,
                "column": 16
              },
              "end": {
                "line": 27,
                "column": 64
              }
            },
            "moduleName": "tolaboard/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Program Analytics");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 34,
                "column": 16
              },
              "end": {
                "line": 34,
                "column": 59
              }
            },
            "moduleName": "tolaboard/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Shared Dashboard");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child5 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 35,
                "column": 16
              },
              "end": {
                "line": 35,
                "column": 55
              }
            },
            "moduleName": "tolaboard/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Designer");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child6 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 36,
                "column": 16
              },
              "end": {
                "line": 36,
                "column": 54
              }
            },
            "moduleName": "tolaboard/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Data Sources");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 8
            },
            "end": {
              "line": 61,
              "column": 8
            }
          },
          "moduleName": "tolaboard/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "id", "navbar");
          dom.setAttribute(el1, "class", "collapse navbar-collapse");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          dom.setAttribute(el2, "class", "nav navbar-nav");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          dom.setAttribute(el3, "class", "dropdown");
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "#");
          dom.setAttribute(el4, "class", "dropdown-toggle");
          dom.setAttribute(el4, "data-toggle", "dropdown");
          dom.setAttribute(el4, "role", "button");
          dom.setAttribute(el4, "aria-haspopup", "true");
          dom.setAttribute(el4, "aria-expanded", "false");
          var el5 = dom.createTextNode("My Dashboards ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.setAttribute(el5, "class", "caret");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("ul");
          dom.setAttribute(el4, "class", "dropdown-menu");
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment(" <li><a href=\"/mydashboards\">Weekly Snapshot</a></li>\n            <li><a href=\"/dashboards/1\">Beneficiary Info</a></li>\n            <li><a href=\"/dashboards/2\">Refugee Flow</a></li>\n            <li><a href=\"/dashboards/3\">Program Analytics and Insights</a></li> ");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n            \n          ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" <li><a href=\"/sharedboards\">Shared Dashboards</a></li>\n              <li><a href=\"/designer\">Designer</a></li>\n          <li><a href=\"/datasources\">Data Sources</a></li>       ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            \n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" <ul class=\"nav navbar navbar-right\">\n            <li class=\"dropdown pull-right\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{session.currentUser.name}} <span class=\"caret\"></span></a>\n              <ul class=\"nav navbar-nav dropdown-menu navbar-right\">\n                <li>Log out</li>\n              </ul>\n            </li>\n          </ul> ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          \n\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          dom.setAttribute(el2, "class", "nav navbar-nav navbar-right user-cntrl-panel");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          var el4 = dom.createElement("img");
          dom.setAttribute(el4, "class", "img-responsive user");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          dom.setAttribute(el3, "class", "dropdown");
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "#");
          dom.setAttribute(el4, "class", "dropdown-toggle");
          dom.setAttribute(el4, "data-toggle", "dropdown");
          dom.setAttribute(el4, "role", "button");
          dom.setAttribute(el4, "aria-haspopup", "true");
          dom.setAttribute(el4, "aria-expanded", "false");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode(" ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.setAttribute(el5, "class", "caret");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("ul");
          dom.setAttribute(el4, "class", "dropdown-menu");
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createElement("a");
          dom.setAttribute(el6, "href", "/login");
          var el7 = dom.createTextNode("Log Out");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                \n              ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          \n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("/.nav-collapse ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element1, [1, 3]);
          var element3 = dom.childAt(element0, [5]);
          var element4 = dom.childAt(element3, [1, 0]);
          var element5 = dom.childAt(element3, [3]);
          var element6 = dom.childAt(element5, [3, 1, 0]);
          var morphs = new Array(10);
          morphs[0] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [5]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [7]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element2, [9]), 0, 0);
          morphs[4] = dom.createMorphAt(dom.childAt(element1, [5]), 0, 0);
          morphs[5] = dom.createMorphAt(dom.childAt(element1, [7]), 0, 0);
          morphs[6] = dom.createMorphAt(dom.childAt(element1, [9]), 0, 0);
          morphs[7] = dom.createAttrMorph(element4, 'src');
          morphs[8] = dom.createMorphAt(dom.childAt(element5, [1]), 0, 0);
          morphs[9] = dom.createElementMorph(element6);
          return morphs;
        },
        statements: [["block", "link-to", ["mydashboards"], [], 0, null, ["loc", [null, [24, 16], [24, 70]]]], ["block", "link-to", ["dashboard-view", 1], [], 1, null, ["loc", [null, [25, 16], [25, 75]]]], ["block", "link-to", ["dashboard-view", 2], [], 2, null, ["loc", [null, [26, 16], [26, 71]]]], ["block", "link-to", ["dashboard-view", 3], [], 3, null, ["loc", [null, [27, 16], [27, 76]]]], ["block", "link-to", ["sharedboards"], [], 4, null, ["loc", [null, [34, 16], [34, 71]]]], ["block", "link-to", ["dashboards", "new"], [], 5, null, ["loc", [null, [35, 16], [35, 67]]]], ["block", "link-to", ["datasources"], [], 6, null, ["loc", [null, [36, 16], [36, 66]]]], ["attribute", "src", ["concat", [["get", "session.currentUser.picture", ["loc", [null, [50, 56], [50, 83]]]]]]], ["content", "session.currentUser.fullName", ["loc", [null, [52, 130], [52, 162]]]], ["element", "action", [["get", "session.logout", ["loc", [null, [54, 46], [54, 60]]]]], [], ["loc", [null, [54, 37], [54, 62]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5, child6]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 77,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "navbar navbar-default navbar-fixed-top");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "navbar-header");
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "navbar-toggle collapsed");
        dom.setAttribute(el4, "data-toggle", "collapse");
        dom.setAttribute(el4, "data-target", "#navbar");
        dom.setAttribute(el4, "aria-expanded", "false");
        dom.setAttribute(el4, "aria-controls", "navbar");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "sr-only");
        var el6 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "navbar-brand");
        dom.setAttribute(el4, "href", "/mydashboards");
        var el5 = dom.createTextNode("            \n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "tola-brand");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-line-chart");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" TolaBoard");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "class", "alpha-logo");
        dom.setAttribute(el4, "src", "assets/images/alpha-test-logo.png");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("      ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "nav-spacer");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <div id=\"footer\"> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Sticky Footer ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <div class=\"container\">\n                <div class=\"col-md-6 text-left\">\n                    <a href=\"http://www.toladata.com\" class=\"text-muted\"><b>Tola</b>Data: Built by</a> <a href=\"http://www.mercycorps.org\" class=\"text-muted\">MercyCorps</a>\n                </div>\n                <div class=\"col-md-6 text-right\">\n                    <a href=\"http://tola.work/documentation\" class=\"text-muted\">Documentation</a> | <a href=\"http://tola.work/faq\" class=\"text-muted\">FAQ</a> | <a href=\"http://tola.work/helpdesk/tickets/submit/\" class=\"text-muted\">Feedback</a> | <a href=\"https://github.com/toladata/TolaActivity/blob/master/LICENSE\" class=\"text-muted\">License</a>\n                </div>\n            </div> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" </div> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 3, 3);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["block", "if", [["get", "session.isLoggedIn", ["loc", [null, [14, 14], [14, 32]]]]], [], 0, null, ["loc", [null, [14, 8], [61, 15]]]], ["content", "outlet", ["loc", [null, [65, 0], [65, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("tolaboard/templates/components/graph-builder-widget", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 4
            },
            "end": {
              "line": 21,
              "column": 4
            }
          },
          "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element12 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element12, 'value');
          morphs[1] = dom.createMorphAt(element12, 0, 0);
          return morphs;
        },
        statements: [["attribute", "value", ["get", "source.url", ["loc", [null, [20, 21], [20, 31]]]]], ["content", "source.label", ["loc", [null, [20, 34], [20, 50]]]]],
        locals: ["source"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 26,
              "column": 3
            },
            "end": {
              "line": 31,
              "column": 3
            }
          },
          "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row data-preview animated fadeIn");
          dom.setAttribute(el1, "style", "width: 80%; height:150px;overflow:auto; border: 1px solid #ccc;");
          var el2 = dom.createTextNode("	\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["inline", "partial", [["get", "templates/partials/spinner", ["loc", [null, [27, 13], [27, 39]]]]], [], ["loc", [null, [27, 3], [27, 41]]]], ["inline", "json-2-table", [], ["displayData", ["subexpr", "@mut", [["get", "scopeData", ["loc", [null, [29, 31], [29, 40]]]]], [], []], "showVizSelection", ["subexpr", "@mut", [["get", "showVizSelection", ["loc", [null, [29, 58], [29, 74]]]]], [], []]], ["loc", [null, [29, 4], [29, 76]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 46,
                "column": 4
              },
              "end": {
                "line": 54,
                "column": 4
              }
            },
            "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-3 col-md-3 col-lg-2");
            var el2 = dom.createTextNode("\n				  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "class", "thumbnail viz-selection");
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("img");
            dom.setAttribute(el3, "class", "img-responsive");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("hr");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("h5");
            var el4 = dom.createElement("strong");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n				  ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element10 = dom.childAt(fragment, [1, 1]);
            var element11 = dom.childAt(element10, [1]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element11, 'data-graph');
            morphs[1] = dom.createAttrMorph(element11, 'src');
            morphs[2] = dom.createElementMorph(element11);
            morphs[3] = dom.createMorphAt(dom.childAt(element10, [5, 0]), 0, 0);
            return morphs;
          },
          statements: [["attribute", "data-graph", ["get", "graph.id", ["loc", [null, [49, 23], [49, 31]]]]], ["attribute", "src", ["concat", [["get", "graph.img", ["loc", [null, [49, 41], [49, 50]]]]]]], ["element", "action", ["showGraphDataModel", ["get", "graph", ["loc", [null, [49, 107], [49, 112]]]]], ["on", "click"], ["loc", [null, [49, 77], [49, 125]]]], ["content", "graph.label", ["loc", [null, [51, 17], [51, 32]]]]],
          locals: ["graph"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 36,
              "column": 3
            },
            "end": {
              "line": 56,
              "column": 3
            }
          },
          "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-md-12");
          var el3 = dom.createTextNode("\n			  		");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "style", "margin-top: 20px;");
          var el4 = dom.createTextNode("\n						");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h4");
          var el5 = dom.createTextNode("Select a Visualization Type");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row graph-library animated fadeIn");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("			\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "graphOptions", ["loc", [null, [46, 12], [46, 24]]]]], [], 0, null, ["loc", [null, [46, 4], [54, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 70,
                  "column": 8
                },
                "end": {
                  "line": 72,
                  "column": 8
                }
              },
              "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
            },
            isEmpty: false,
            arity: 2,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("									");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("option");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element7 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element7, 'value');
              morphs[1] = dom.createMorphAt(element7, 0, 0);
              return morphs;
            },
            statements: [["attribute", "value", ["get", "colName", ["loc", [null, [71, 25], [71, 32]]]]], ["content", "colName", ["loc", [null, [71, 35], [71, 46]]]]],
            locals: ["colName", "index"],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 65,
                "column": 4
              },
              "end": {
                "line": 75,
                "column": 4
              }
            },
            "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("					");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "data-model-input");
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h5");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(":");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("select");
            dom.setAttribute(el2, "class", "form-control");
            var el3 = dom.createTextNode("\n									");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("option");
            dom.setAttribute(el3, "value", "");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("							");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element8 = dom.childAt(fragment, [1]);
            var element9 = dom.childAt(element8, [3]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(dom.childAt(element8, [1]), 0, 0);
            morphs[1] = dom.createAttrMorph(element9, 'name');
            morphs[2] = dom.createAttrMorph(element9, 'onchange');
            morphs[3] = dom.createMorphAt(element9, 3, 3);
            return morphs;
          },
          statements: [["content", "fieldInput.label", ["loc", [null, [67, 10], [67, 30]]]], ["attribute", "name", ["get", "fieldInput.name", ["loc", [null, [68, 22], [68, 37]]]]], ["attribute", "onchange", ["subexpr", "action", ["tryGraphRender"], ["value", "target.value"], ["loc", [null, [68, 49], [68, 98]]]]], ["block", "each-in", [["get", "scopeData.0", ["loc", [null, [70, 19], [70, 32]]]]], [], 0, null, ["loc", [null, [70, 8], [72, 20]]]]],
          locals: ["fieldInput"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 60,
              "column": 3
            },
            "end": {
              "line": 80,
              "column": 3
            }
          },
          "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row animated fadeIn");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          dom.setAttribute(el2, "style", "margin-top: 20px;");
          var el3 = dom.createTextNode("Specify a data field for each required input");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				\n				\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("				\n				\n				\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 3, 3);
          return morphs;
        },
        statements: [["block", "each", [["get", "scopeDataModel", ["loc", [null, [65, 12], [65, 26]]]]], [], 0, null, ["loc", [null, [65, 4], [75, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 83,
              "column": 3
            },
            "end": {
              "line": 90,
              "column": 3
            }
          },
          "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h6");
          var el2 = dom.createTextNode("renderGraph area");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-md-8 gbw-graph");
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3, 1]), 1, 1);
          return morphs;
        },
        statements: [["inline", "component", [["get", "scopeComponent", ["loc", [null, [87, 16], [87, 30]]]]], ["scopeData", ["subexpr", "@mut", [["get", "scopeData", ["loc", [null, [87, 41], [87, 50]]]]], [], []], "scopeDataModel", ["subexpr", "@mut", [["get", "scopeDataModel", ["loc", [null, [87, 66], [87, 80]]]]], [], []], "graphConfig", ["subexpr", "@mut", [["get", "graphConfig", ["loc", [null, [87, 93], [87, 104]]]]], [], []]], ["loc", [null, [87, 4], [87, 106]]]]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 103,
                "column": 4
              },
              "end": {
                "line": 126,
                "column": 5
              }
            },
            "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "row animated fadeIn");
            var el2 = dom.createTextNode("\n				  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "data-filters-row");
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("select");
            dom.setAttribute(el3, "name", "ds-name");
            dom.setAttribute(el3, "class", "form-control data-filters-field");
            var el4 = dom.createTextNode("\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode("district");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("						\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode("age");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("						\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode("gender");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("						\n					");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("select");
            dom.setAttribute(el3, "class", "form-control data-filters-eval");
            var el4 = dom.createTextNode("\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode("=");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode("!=");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode("<");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode(">");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("							\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode("<=");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode(">=");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode("in");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode("not in");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n					");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("input");
            dom.setAttribute(el3, "class", "form-control data-filters-value");
            dom.setAttribute(el3, "type", "text");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "class", "btn btn-success data-filters-delete");
            var el4 = dom.createTextNode("Apply");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "class", "btn btn-default data-filters-delete");
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "fa fa-times");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					  ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 1]);
            var element1 = dom.childAt(element0, [1]);
            var element2 = dom.childAt(element0, [3]);
            var element3 = dom.childAt(element0, [5]);
            var element4 = dom.childAt(element0, [7]);
            var element5 = dom.childAt(element0, [9]);
            var morphs = new Array(5);
            morphs[0] = dom.createAttrMorph(element1, 'onchange');
            morphs[1] = dom.createAttrMorph(element2, 'onchange');
            morphs[2] = dom.createAttrMorph(element3, 'onchange');
            morphs[3] = dom.createElementMorph(element4);
            morphs[4] = dom.createElementMorph(element5);
            return morphs;
          },
          statements: [["attribute", "onchange", ["subexpr", "action", ["updateFilter"], ["value", "target.value"], ["loc", [null, [106, 37], [106, 83]]]]], ["attribute", "onchange", ["subexpr", "action", ["updateFilter"], [], ["loc", [null, [111, 22], [111, 47]]]]], ["attribute", "onchange", ["subexpr", "action", ["updateFilter"], [], ["loc", [null, [121, 21], [121, 46]]]]], ["element", "action", ["applyFilter"], [], ["loc", [null, [122, 13], [122, 37]]]], ["element", "action", ["deleteFilter", ["get", "filter.id", ["loc", [null, [123, 37], [123, 46]]]]], [], ["loc", [null, [123, 13], [123, 48]]]]],
          locals: ["filter"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 93,
              "column": 3
            },
            "end": {
              "line": 128,
              "column": 3
            }
          },
          "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n					");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-md-12");
          var el3 = dom.createTextNode("\n				  		");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "style", "margin-top: 20px;");
          var el4 = dom.createTextNode("\n							");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h4");
          dom.setAttribute(el4, "style", "float:left;");
          var el5 = dom.createTextNode("Add Filters (Optional)");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n							");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("button");
          dom.setAttribute(el4, "style", "margin-top:0;");
          dom.setAttribute(el4, "class", "btn btn-default");
          var el5 = dom.createTextNode("Add Filter");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n						");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n					");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("				\n				");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "data-filters");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("				");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("	\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element6 = dom.childAt(fragment, [1, 1, 1, 3]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element6);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["element", "action", ["addFilter"], [], ["loc", [null, [98, 61], [98, 83]]]], ["block", "each", [["get", "filters", ["loc", [null, [103, 12], [103, 19]]]]], [], 0, null, ["loc", [null, [103, 4], [126, 14]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 142,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" Modal ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <div class=\"container\"> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "modal fade");
        dom.setAttribute(el1, "id", "myModal");
        dom.setAttribute(el1, "tabindex", "-1");
        dom.setAttribute(el1, "role", "dialog");
        dom.setAttribute(el1, "aria-labelledby", "myModalLabel");
        dom.setAttribute(el1, "aria-hidden", "true");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-dialog builder-widget");
        dom.setAttribute(el2, "role", "document");
        var el3 = dom.createTextNode("\n	    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "modal-content");
        var el4 = dom.createTextNode("\n	      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-header");
        var el5 = dom.createTextNode("\n	        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "close");
        dom.setAttribute(el5, "data-dismiss", "modal");
        dom.setAttribute(el5, "aria-label", "Close");
        var el6 = dom.createTextNode("\n	          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "aria-hidden", "true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        dom.setAttribute(el5, "class", "modal-title");
        dom.setAttribute(el5, "id", "myModalLabel");
        var el6 = dom.createTextNode("Graph Builder");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-body");
        var el5 = dom.createTextNode("\n	      	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "container-fluid");
        var el6 = dom.createTextNode("\n\n	        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "row dropdown");
        var el7 = dom.createTextNode("\n	        	");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h4");
        var el8 = dom.createTextNode("Select a Data Source");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n				");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("select");
        dom.setAttribute(el7, "id", "data-source-select");
        dom.setAttribute(el7, "name", "ds-name");
        dom.setAttribute(el7, "class", "form-control");
        var el8 = dom.createTextNode("\n					");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("option");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("				");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("					  \n			");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n			");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" Uses json-2-table component to table-ize data ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n			\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				\n			\n\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("			\n\n			");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" Show this area when a viz type is selected ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n			");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" Moment of truth... graph time!! ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n			");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" Begin data filter section ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("			");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" end data filter section ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("				\n			\n			\n	      ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" model body container ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-footer");
        var el5 = dom.createTextNode("\n	        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "btn btn-secondary");
        dom.setAttribute(el5, "data-dismiss", "modal");
        var el6 = dom.createTextNode("Close");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "btn btn-tola-accent");
        var el6 = dom.createTextNode("Save changes");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" </div> ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element13 = dom.childAt(fragment, [4, 1, 1]);
        var element14 = dom.childAt(element13, [3, 1]);
        var element15 = dom.childAt(element14, [1, 3]);
        var element16 = dom.childAt(element13, [7]);
        var element17 = dom.childAt(element16, [1]);
        var element18 = dom.childAt(element16, [3]);
        var morphs = new Array(10);
        morphs[0] = dom.createAttrMorph(element15, 'onchange');
        morphs[1] = dom.createMorphAt(element15, 3, 3);
        morphs[2] = dom.createMorphAt(element14, 5, 5);
        morphs[3] = dom.createMorphAt(element14, 7, 7);
        morphs[4] = dom.createMorphAt(element14, 11, 11);
        morphs[5] = dom.createMorphAt(element14, 15, 15);
        morphs[6] = dom.createMorphAt(element14, 19, 19);
        morphs[7] = dom.createElementMorph(element17);
        morphs[8] = dom.createAttrMorph(element18, 'disabled');
        morphs[9] = dom.createElementMorph(element18);
        return morphs;
      },
      statements: [["attribute", "onchange", ["subexpr", "action", ["getData"], ["value", "target.value"], ["loc", [null, [17, 60], [17, 102]]]]], ["block", "each", [["get", "model.datasources", ["loc", [null, [19, 12], [19, 29]]]]], [], 0, null, ["loc", [null, [19, 4], [21, 13]]]], ["block", "if", [["get", "showDataSourcePreview", ["loc", [null, [26, 9], [26, 30]]]]], [], 1, null, ["loc", [null, [26, 3], [31, 10]]]], ["block", "if", [["get", "showVizSelection", ["loc", [null, [36, 9], [36, 25]]]]], [], 2, null, ["loc", [null, [36, 3], [56, 10]]]], ["block", "if", [["get", "showDataModel", ["loc", [null, [60, 9], [60, 22]]]]], [], 3, null, ["loc", [null, [60, 3], [80, 10]]]], ["block", "if", [["get", "renderGraph", ["loc", [null, [83, 9], [83, 20]]]]], [], 4, null, ["loc", [null, [83, 3], [90, 10]]]], ["block", "if", [["get", "showDataFilters", ["loc", [null, [93, 9], [93, 24]]]]], [], 5, null, ["loc", [null, [93, 3], [128, 10]]]], ["element", "action", ["clearGraphBuilder"], [], ["loc", [null, [135, 78], [135, 108]]]], ["attribute", "disabled", ["get", "disableSave", ["loc", [null, [136, 28], [136, 39]]]]], ["element", "action", ["updateBoardItem"], [], ["loc", [null, [136, 42], [136, 70]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});
define("tolaboard/templates/components/graphs/chartjs-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/components/graphs/chartjs-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("canvas");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("tolaboard/templates/components/graphs/chartjs-pie", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 17
          }
        },
        "moduleName": "tolaboard/templates/components/graphs/chartjs-pie.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("canvas");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("tolaboard/templates/components/graphs/leaflet-map", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/components/graphs/leaflet-map.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("Leaflet Map Here");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("tolaboard/templates/components/graphs/test-graph", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/components/graphs/test-graph.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("canvas");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("tolaboard/templates/components/json-2-table", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 5,
              "column": 2
            }
          },
          "moduleName": "tolaboard/templates/components/json-2-table.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("th");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "colName", ["loc", [null, [4, 7], [4, 18]]]]],
        locals: ["colName"],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 3
              },
              "end": {
                "line": 11,
                "column": 3
              }
            },
            "moduleName": "tolaboard/templates/components/json-2-table.hbs"
          },
          isEmpty: false,
          arity: 2,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "colValue", ["loc", [null, [10, 8], [10, 20]]]]],
          locals: ["colName", "colValue"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 1
            },
            "end": {
              "line": 13,
              "column": 1
            }
          },
          "moduleName": "tolaboard/templates/components/json-2-table.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("		\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "each-in", [["get", "row", ["loc", [null, [9, 14], [9, 17]]]]], [], 0, null, ["loc", [null, [9, 3], [11, 15]]]]],
        locals: ["row", "index"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/components/json-2-table.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        dom.setAttribute(el2, "style", "display: table-header-group;");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["block", "each-in", [["get", "displayData.0", ["loc", [null, [3, 13], [3, 28]]]]], [], 0, null, ["loc", [null, [3, 2], [5, 14]]]], ["block", "each", [["get", "displayData", ["loc", [null, [7, 9], [7, 20]]]]], [], 1, null, ["loc", [null, [7, 1], [13, 10]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("tolaboard/templates/components/render-tolaboard-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 2
            }
          },
          "moduleName": "tolaboard/templates/components/render-tolaboard-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" The graph-builder-widget component would need to be in either this template, or the parent component of this component in order to fire. The render-tolaboard-item component is intended to be used in all cases of rendering a tolaboard item, so only the designer component needs the graph-builder-widget template ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "data-toggle", "modal");
          dom.setAttribute(el1, "data-target", "#myModal");
          dom.setAttribute(el1, "class", "btn btn-xs");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "fa fa-edit");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-xs delete-button");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "fa fa-trash");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("		\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3]);
          var element1 = dom.childAt(fragment, [5]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [["element", "action", ["activateGraphBuilder"], [], ["loc", [null, [5, 11], [5, 44]]]], ["element", "action", ["deleteWidget"], [], ["loc", [null, [6, 11], [6, 36]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "tolaboard/templates/components/render-tolaboard-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "graph-builder-widget", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [17, 12], [17, 17]]]]], [], []], "tbItemConfig", ["subexpr", "@mut", [["get", "tbItemConfig", ["loc", [null, [18, 19], [18, 31]]]]], [], []], "activeIndex", ["subexpr", "@mut", [["get", "activeIndex", ["loc", [null, [19, 18], [19, 29]]]]], [], []], "activeWidget", ["subexpr", "@mut", [["get", "activeWidget", ["loc", [null, [20, 48], [20, 60]]]]], [], []], "activeElement", ["subexpr", "@mut", [["get", "activeElement", ["loc", [null, [21, 49], [21, 62]]]]], [], []], "dataSources", ["subexpr", "@mut", [["get", "model.datasources", ["loc", [null, [22, 47], [22, 64]]]]], [], []], "graphOptions", ["subexpr", "@mut", [["get", "model.graphOptions", ["loc", [null, [23, 48], [23, 66]]]]], [], []], "updateSaveBoardItem", "updateSaveBoardItem"], ["loc", [null, [16, 4], [24, 78]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 28,
            "column": 68
          }
        },
        "moduleName": "tolaboard/templates/components/render-tolaboard-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("li");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "widget-ui btn-group");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" scopeGraph gets determined in tbItemConfig and defined once this Ember view is inserted ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "viz-target");
        var el3 = dom.createTextNode("		\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" The nature of this component is a bit odd... didInsertElement event uses gridster api\n     to draw grid, but then nested child component draws graph.  ");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [5]), 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "if", [["get", "itemMutable", ["loc", [null, [3, 8], [3, 19]]]]], [], 0, null, ["loc", [null, [3, 2], [7, 9]]]], ["inline", "component", [["get", "tbItemConfig.graph.component", ["loc", [null, [11, 14], [11, 42]]]]], ["tbItemConfig", ["subexpr", "@mut", [["get", "tbItemConfig", ["loc", [null, [11, 56], [11, 68]]]]], [], []], "dataSources", ["subexpr", "@mut", [["get", "dataSources", ["loc", [null, [11, 81], [11, 92]]]]], [], []]], ["loc", [null, [11, 2], [11, 94]]]], ["block", "if", [["get", "showGraphBuilder", ["loc", [null, [15, 6], [15, 22]]]]], [], 1, null, ["loc", [null, [15, 0], [25, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("tolaboard/templates/components/tolaboard-designer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 44
            },
            "end": {
              "line": 20,
              "column": 94
            }
          },
          "moduleName": "tolaboard/templates/components/tolaboard-designer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("RRIMA Primary Dashboard");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 44
            },
            "end": {
              "line": 21,
              "column": 83
            }
          },
          "moduleName": "tolaboard/templates/components/tolaboard-designer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Refugee Flow");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 44
            },
            "end": {
              "line": 22,
              "column": 101
            }
          },
          "moduleName": "tolaboard/templates/components/tolaboard-designer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Program Analytics and Insights");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 58,
              "column": 28
            },
            "end": {
              "line": 69,
              "column": 28
            }
          },
          "moduleName": "tolaboard/templates/components/tolaboard-designer.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("  \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "render-tolaboard-item", [], ["index", ["subexpr", "@mut", [["get", "index", ["loc", [null, [59, 62], [59, 67]]]]], [], []], "itemMutable", true, "tbItemConfig", ["subexpr", "@mut", [["get", "tbItemConfig", ["loc", [null, [60, 62], [60, 74]]]]], [], []], "model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [61, 38], [61, 43]]]]], [], []], "activateGraphBuilder", "activateGraphBuilder", "setActiveWidget", "setActiveWidget", "setActiveElement", "setActiveElement", "setActiveIndex", "setActiveIndex", "removeTBItem", "removeItem", "setActiveTBItemConfig", "setActiveTBItemConfig"], ["loc", [null, [59, 32], [68, 34]]]]],
        locals: ["tbItemConfig", "index"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 96,
            "column": 10
          }
        },
        "moduleName": "tolaboard/templates/components/tolaboard-designer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" View to create/define new dashboard ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "create-view");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "panel panel-default tb-designer-header");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel-heading");
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-4");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h3");
        var el8 = dom.createTextNode("TolaBoard Designer");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-6 col-md-offset-2");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "btn-group");
        dom.setAttribute(el7, "role", "group");
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "btn-group");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("button");
        dom.setAttribute(el9, "class", "btn btn-default dropdown-toggle");
        dom.setAttribute(el9, "type", "button");
        dom.setAttribute(el9, "id", "dropdownMenu1");
        dom.setAttribute(el9, "data-toggle", "dropdown");
        dom.setAttribute(el9, "aria-haspopup", "true");
        dom.setAttribute(el9, "aria-expanded", "true");
        var el10 = dom.createTextNode("\n                                        Edit TolaBoard\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("span");
        dom.setAttribute(el10, "class", "caret");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("ul");
        dom.setAttribute(el9, "class", "dropdown-menu");
        dom.setAttribute(el9, "aria-labelledby", "dropdownMenu1");
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createElement("a");
        dom.setAttribute(el11, "href", "mydashboards");
        var el12 = dom.createTextNode("Weekly Snapshot");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createComment("");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createComment("");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                        ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("li");
        var el11 = dom.createComment("");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                                    ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "btn-group");
        var el9 = dom.createTextNode("\n                                    ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("button");
        dom.setAttribute(el9, "class", "btn btn-tola-accent");
        var el10 = dom.createTextNode("New TolaBoard");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                                    \n                                ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                                \n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" end first panel ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    \n            \n    \n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "panel panel-default tb-designer-header");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel-body");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-12");
        var el7 = dom.createTextNode("         \n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "tolaboard-save");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("button");
        dom.setAttribute(el8, "class", "btn btn-default");
        var el9 = dom.createTextNode("Clear");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("button");
        dom.setAttribute(el8, "class", "btn btn-success");
        var el9 = dom.createTextNode("Save");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "design-window");
        var el8 = dom.createTextNode("\n                        \n                        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("button");
        dom.setAttribute(el8, "class", "btn btn-default");
        var el9 = dom.createTextNode("Add Component");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        \n                        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h2");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "gridster");
        var el9 = dom.createTextNode("\n                            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("ul");
        var el10 = dom.createComment(" gridster stuff ");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment(" new approach model can have tolaboard if id passed into route via dynamic model aslo can get defined by creating new tb\n                            with buttons ");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                            \n                            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment(" render is responsible for displaying an item, and it's also responsible for letting\n                                 tb-designer know which item is 'active' by setting the value, so it can be passed\n                                 to the gbw component below ");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("                            \n                            ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        \n                        \n                                    \n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment(" Single instance of this component shared across tolaboard-item components.. triggered by modal which is activated by the edit button (pencil) in the tolaboard-item component template\n\n                            Passed in by tolaboard-designer:\n                                         dataSources\n                                         graphOptions\n                                         itemHome\n\n                            Defined in this component:\n                            saveTolaBoard - passed to builder widget\n                                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                                    \n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                        \n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    \n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1]);
        var element1 = dom.childAt(element0, [1, 1, 1, 3, 1]);
        var element2 = dom.childAt(element1, [1, 3]);
        var element3 = dom.childAt(element1, [3, 1]);
        var element4 = dom.childAt(element0, [4, 1, 1, 1, 3]);
        var element5 = dom.childAt(element4, [1]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [5]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [7]), 0, 0);
        morphs[3] = dom.createElementMorph(element3);
        morphs[4] = dom.createElementMorph(element5);
        morphs[5] = dom.createMorphAt(dom.childAt(element4, [3]), 0, 0);
        morphs[6] = dom.createMorphAt(dom.childAt(element4, [5, 1]), 6, 6);
        return morphs;
      },
      statements: [["block", "link-to", ["dashboards", 1], [], 0, null, ["loc", [null, [20, 44], [20, 106]]]], ["block", "link-to", ["mydashboards"], [], 1, null, ["loc", [null, [21, 44], [21, 95]]]], ["block", "link-to", ["mydashboards"], [], 2, null, ["loc", [null, [22, 44], [22, 113]]]], ["element", "action", ["createNewBoard"], [], ["loc", [null, [26, 44], [26, 71]]]], ["element", "action", ["addItem"], ["on", "click"], ["loc", [null, [47, 56], [47, 87]]]], ["content", "model.title", ["loc", [null, [49, 28], [49, 43]]]], ["block", "each", [["get", "model.dashboard.items", ["loc", [null, [58, 36], [58, 57]]]]], [], 3, null, ["loc", [null, [58, 28], [69, 37]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("tolaboard/templates/components/tolaboard-grid", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/components/tolaboard-grid.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-12");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "id", "dashboard");
        dom.setAttribute(el4, "class", "gridster grid-custom");
        var el5 = dom.createTextNode("				\n		    	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        var el6 = dom.createComment(" Tolaboard grid rendered here via gridster.js ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("tolaboard/templates/components/tolaboard-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 5
          }
        },
        "moduleName": "tolaboard/templates/components/tolaboard-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("li");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "widget-ui btn-group");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "data-toggle", "modal");
        dom.setAttribute(el3, "data-target", "#myModal");
        dom.setAttribute(el3, "class", "btn btn-xs");
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "fa fa-edit");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "btn btn-xs delete-button");
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "fa fa-trash");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("		\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "viz-target");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["element", "action", ["runGraphBuilderWidget"], [], ["loc", [null, [3, 10], [3, 44]]]], ["element", "action", ["deleteWidget"], [], ["loc", [null, [4, 10], [4, 35]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("tolaboard/templates/components/tolaboard-layout", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 48,
              "column": 5
            },
            "end": {
              "line": 53,
              "column": 5
            }
          },
          "moduleName": "tolaboard/templates/components/tolaboard-layout.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("						");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "graph-builder-widget", [], ["dataSources", ["subexpr", "@mut", [["get", "model.dataSources", ["loc", [null, [50, 19], [50, 36]]]]], [], []], "graphOptions", ["subexpr", "@mut", [["get", "model.graphOptions", ["loc", [null, [51, 20], [51, 38]]]]], [], []], "updateSaveBoardItem", "updateSaveBoardItem"], ["loc", [null, [49, 6], [52, 50]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 61,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/components/tolaboard-layout.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "panel panel-default tb-designer-header");
        var el2 = dom.createTextNode("\n	\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-body");
        var el3 = dom.createTextNode("\n    	\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-12");
        var el5 = dom.createTextNode("			\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "tolaboard-save");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "class", "btn btn-default");
        var el7 = dom.createTextNode("Clear");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "class", "btn btn-success");
        var el7 = dom.createTextNode("Save");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "design-window");
        var el6 = dom.createTextNode("\n					\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "class", "btn btn-default");
        var el7 = dom.createTextNode("Add Component");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n					\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "gridster");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        var el8 = dom.createComment(" gridster stuff ");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment(" This is for new tolaboards, or tolaboard_id == 0 ");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n							\n						  		");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment(" {{#each tolaboardItems as |item|}}\n							    	{{tolaboard-item index=item \n							      	  removeItem='removeItem'\n							      	  setActiveItem='setActiveItem'\n									}}\n						  		{{/each}} ");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n					  		\n\n					  		");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment(" This is for existing tolaboards, or tolaboard_id == valid id ");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n					  		");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment(" {{#if tbExist}} -->\n						  		{{#each model.tolaboard.responseJSON.dashboard as |tbItem|}}					\n									{{render-tolaboard-item itemMutable=true tbItemConfig=tbItem}}	\n								{{/each}}\n							<!-- {{/if}} ");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n					");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" Single instance of this component shared across tolaboard-item components.. triggered by modal which is activated by the edit button (pencil) in the tolaboard-item component template\n\n						 Passed in by tolaboard-designer:\n						 dataSources\n						 graphOptions\n						 itemHome\n\n						 Defined in this component:\n						 saveTolaBoard - passed to builder widget\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n					\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1, 1, 3]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(element0, 7, 7);
        return morphs;
      },
      statements: [["element", "action", ["addItem"], ["on", "click"], ["loc", [null, [14, 37], [14, 68]]]], ["block", "if", [["get", "showGraphBuilder", ["loc", [null, [48, 11], [48, 27]]]]], [], 0, null, ["loc", [null, [48, 5], [53, 12]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("tolaboard/templates/dashboard-view", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 6
            },
            "end": {
              "line": 19,
              "column": 6
            }
          },
          "moduleName": "tolaboard/templates/dashboard-view.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("	\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "render-tolaboard-item", [], ["itemMutable", false, "tbItemConfig", ["subexpr", "@mut", [["get", "tbItem", ["loc", [null, [18, 62], [18, 68]]]]], [], []]], ["loc", [null, [18, 7], [18, 70]]]]],
        locals: ["tbItem"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 10
          }
        },
        "moduleName": "tolaboard/templates/dashboard-view.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "id", "current-dashboard");
        var el2 = dom.createTextNode("	\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-12");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" The dashboard route contains a dynamic segment that represents an id to obtain a partiuclar persisted tolaboard. The dashboard property on the tolaboard data contains an array of objects. Each object has a gridster component and a graph component\n\n				The model is a single tolaboard, and we will use model.dashboard in a \"for each\" block to render each tolaboard item in the dashboard... using render-tolaboard-item component				\n\n				It's kinda odd that we have the gridster ul dom elements here, but we need that wrapper. Ideally, components live on their own, and are independent of the outside, but here, the .gridster ul selector is needed for the gridster api used in the render component..hmm\n\n				How could it be different... like self-contained? Perhaps a render-tolaboard component which calls render-tolaboard-item component? This just encapsulates the problem... just making note of it for now.\n\n			");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "gridster");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("				\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [5, 1]), 1, 1);
        return morphs;
      },
      statements: [["content", "model.title", ["loc", [null, [14, 8], [14, 23]]]], ["block", "each", [["get", "model.items", ["loc", [null, [17, 14], [17, 25]]]]], [], 0, null, ["loc", [null, [17, 6], [19, 15]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("tolaboard/templates/dashboards", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 34
          }
        },
        "moduleName": "tolaboard/templates/dashboards.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" Basic structure\n	component: tolaboard-designer\n		model: datasources - needed by graph-builder-widget\n			   graphOptions - needed by graph-builder-widget\n			   dashboard - used to get array of items for render-tolaboard-item component\n\n		children: \n			component: render-tolaboard-item\n			model usage: model.dashboards\n\n			children:\n				component: graph-builder-widget (needs datasource, graphoptions and, if exists, tb item config)\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "tolaboard-designer", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [14, 27], [14, 32]]]]], [], []]], ["loc", [null, [14, 0], [14, 34]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("tolaboard/templates/datasources", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 65,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/datasources.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("Data Sources");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("My Data");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "thumbnail data-internal");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "datasource-item");
        var el6 = dom.createTextNode("Camp A Survey");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "datasource-date");
        var el6 = dom.createTextNode("Updated: 5/31/2016");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("			\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "thumbnail data-internal");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "datasource-item");
        var el6 = dom.createTextNode("Camp B Survey");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "datasource-date");
        var el6 = dom.createTextNode("Updated: 5/31/2016");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("			\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "thumbnail data-external");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "datasource-item");
        var el6 = dom.createTextNode("Econonmic Forecast");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "datasource-date");
        var el6 = dom.createTextNode("Updated: 5/31/2016");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("			\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("Shared");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "thumbnail data-internal");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "datasource-item");
        var el6 = dom.createTextNode("Izmir Beneficiary Data");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "datasource-date");
        var el6 = dom.createTextNode("Updated: 5/31/2016");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "thumbnail data-internal");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "datasource-item");
        var el6 = dom.createTextNode("Refugee Location Database");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "datasource-date");
        var el6 = dom.createTextNode("Updated: 5/31/2016");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "thumbnail data-external");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "datasource-item");
        var el6 = dom.createTextNode("IRC Data");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "datasource-date");
        var el6 = dom.createTextNode("Updated: 5/31/2016");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "thumbnail data-internal");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "datasource-item");
        var el6 = dom.createTextNode("Aegean Response Database");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "datasource-date");
        var el6 = dom.createTextNode("Updated: 5/31/2016");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("tolaboard/templates/graph-options", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/graph-options.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("tolaboard/templates/gridster-widget-ui", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["empty-body"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/gridster-widget-ui.hbs"
      },
      isEmpty: true,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("tolaboard/templates/head", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/head.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" `ember-cli-meta-tags/templates/head.hbs` ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["inline", "head-tags", [], ["headTags", ["subexpr", "@mut", [["get", "model.headTags", ["loc", [null, [2, 21], [2, 35]]]]], [], []]], ["loc", [null, [2, 0], [2, 37]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("tolaboard/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 42,
            "column": 10
          }
        },
        "moduleName": "tolaboard/templates/login.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "login-page");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-4");
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel panel-default");
        var el6 = dom.createTextNode("\n			  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "panel-heading");
        var el7 = dom.createElement("h4");
        var el8 = dom.createTextNode("Welcome to TolaBoard Alpha");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n			  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "panel-body");
        var el7 = dom.createTextNode("\n			  	TolaBoard is an ambitious platform within Mercy Corps intended to make creating visualizations of your data. The user interface provides a more visual and intuitive format to let you see your data without the need to buy or learn complex tools.\n			  ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n			  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "g-signin2");
        dom.setAttribute(el6, "data-onsuccess", "onSignIn");
        dom.setAttribute(el6, "data-theme", "dark");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n			");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			\n			\n		");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-8");
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "tolaboard-slides");
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "row");
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "col-md-6");
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "class", "img-responsive");
        dom.setAttribute(el8, "src", "assets/images/intro/tolaboard-1.png");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "col-md-6");
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "class", "img-responsive");
        dom.setAttribute(el8, "src", "assets/images/intro/tolaboard-1.png");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "col-md-6");
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "class", "img-responsive");
        dom.setAttribute(el8, "src", "assets/images/intro/tolaboard-1.png");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "col-md-6");
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "class", "img-responsive");
        dom.setAttribute(el8, "src", "assets/images/intro/tolaboard-1.png");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n				");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				\n			");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		\n	");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "footer");
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Sticky Footer ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "container");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 text-left");
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "http://www.toladata.com");
        dom.setAttribute(el5, "class", "text-muted");
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("Tola");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("Data: Built by");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "http://www.mercycorps.org");
        dom.setAttribute(el5, "class", "text-muted");
        var el6 = dom.createTextNode("MercyCorps");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 text-right");
        var el5 = dom.createTextNode("\n                    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "http://tola.work/documentation");
        dom.setAttribute(el5, "class", "text-muted");
        var el6 = dom.createTextNode("Documentation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" | ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "http://tola.work/faq");
        dom.setAttribute(el5, "class", "text-muted");
        var el6 = dom.createTextNode("FAQ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" | ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "http://tola.work/helpdesk/tickets/submit/");
        dom.setAttribute(el5, "class", "text-muted");
        var el6 = dom.createTextNode("Feedback");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" | ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "https://github.com/toladata/TolaActivity/blob/master/LICENSE");
        dom.setAttribute(el5, "class", "text-muted");
        var el6 = dom.createTextNode("License");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("tolaboard/templates/mydashboards", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 70,
            "column": 10
          }
        },
        "moduleName": "tolaboard/templates/mydashboards.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Weekly Snapshot Dashboard");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" {{tolaboard-grid}} ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("style");
        dom.setAttribute(el1, "type", "text/css");
        var el2 = dom.createTextNode("\n	/* Done for demo - get rid of this */\n	h2 {\n		margin-top: 40px;\n		margin-bottom: 20px;\n	}\n	.demo-graph {\n		border:	1px solid #ddd;\n		margin: 4px 4px;\n		background-color: #FAFAFA;\n		border-radius: 2px;\n		box-shadow: 1px 2.5px 5px #ddd;\n	}\n	.dial {\n		height: 150px;\n	}\n	.map {\n		height: 300px;\n	}\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n			\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-4");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "verbage");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h4");
        var el7 = dom.createTextNode("Lorem Ipsum");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-2");
        var el5 = dom.createTextNode("				\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "demo-graph dial");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "class", "img-responsive");
        dom.setAttribute(el6, "src", "assets/images/graph-library/demo-pie.png");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("				\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "demo-graph dial");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "class", "img-responsive");
        dom.setAttribute(el6, "src", "assets/images/graph-library/modern-dial.png");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("				\n				\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6");
        var el5 = dom.createTextNode("		\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "demo-graph");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "class", "img-responsive  map");
        dom.setAttribute(el6, "src", "assets/images/graph-library/map2.png");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("	\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-4 chart");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "demo-graph");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "class", "img-responsive");
        dom.setAttribute(el6, "src", "assets/images/graph-library/bar1.png");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n					\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-4");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "demo-graph");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "class", "img-responsive");
        dom.setAttribute(el6, "src", "assets/images/graph-library/bar2.png");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("				\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-4");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "demo-graph");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "class", "img-responsive");
        dom.setAttribute(el6, "src", "assets/images/graph-library/bar1.png");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("tolaboard/templates/sharedboards", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 42,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/sharedboards.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" hacked up temporary css ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("style");
        dom.setAttribute(el1, "type", "text/css");
        var el2 = dom.createTextNode("\n	/*h4 {\n		margin-top: 50px;\n	}*/\n	p {\n		margin-top: 15px;\n		font-size: 16px;\n	}\n	img {\n		box-shadow: 2px 2px #777;\n	}\n	img:hover {\n		opacity: .60;\n	}\n	.shard-db {\n		margin-top: 40px;\n	}\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Shared Dashboards");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row shard-db");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-12 col-md-4");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "class", "img-responsive");
        dom.setAttribute(el5, "src", "assets/images/graph-library/izmir-interactive-map.png");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-12 col-md-8");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h3");
        var el5 = dom.createTextNode("İzmir Interactive Map Dashboard");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n	\n	\n	\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('tolaboard/config/environment', ['ember'], function(Ember) {
  var prefix = 'tolaboard';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("tolaboard/app")["default"].create({"name":"tolaboard","version":"0.0.0+"});
}

/* jshint ignore:end */
//# sourceMappingURL=tolaboard.map