import Ember from 'ember';

/* each type of component or graph which can be rendered in a gridster widget... making up a tolaboard,
   will have its own ember component. This is where the functions for how to draw this particular graph
   will live, and all it needs is the info to get the data for this viz. The element is autoamtic because
   we just use the ember view given along with the .viz class to form a combined css selector

   There are two scenarios every graph component needs to operated under:
   		1. graph that is completely defined and lives in the dashboard-view
   		   or designer components.
   		2. graph that is being built/updated via the graph builder widget

   		
   Every graph component will receive an object called tbItemConfig. In case #1,
   this comes from the items array in our Board model. In case #2, it comes from
   the tbItemConfig widget AND the tbItemGraph object in the graph builder. The
   latter serves as a dictionary of what will ultimately be saved into the 
   tbItemConfig when saving the work done in the graph builder widget.
*/
export default Ember.Component.extend({
	self: this,

	dataAgg: Ember.inject.service('data-aggregator'),

	didInsertElement: function() {

		console.log('CHARTJS BAR COMPONENT==>',this);

		var sourceId = this.get('tbItemConfig').graph.source;
		var dataModel = this.get('tbItemConfig').graph.dataModel;

		// returns promise, on resolution returns d3.nest of aggregated data
		var tablesData = this.get('dataAgg').groupBySum(sourceId, dataModel);		
		
		var self = this;
		tablesData.then(function(result) {
			var labelArr = result.map(function(d) { return d.key});
			var dataArr = result.map(function(d) { return d.value});

			var barConfig = Ember.Object.create({
						type: "bar",
						data: Ember.Object.create({
							labels: labelArr,
							datasets: [Ember.Object.create({
								data: dataArr,
								backgroundColor: "#00afaa"
							})]
						}),
						options: {}
			});

			self.get('tbItemConfig').get('graph').set('config', barConfig);

			console.log('barConfig', barConfig);
			var ctx = Ember.$('#'+ self.get('elementId') + ' canvas');
						console.log('ctx', ctx)
					
			ctx.resize(function() {
				'resize detected';
			});


			var barChart = new Chart(ctx, barConfig);
			console.log('testChart', barChart)

		})

		

		

					
					
		
	},	// end didInsertElement

		

		// see dataModel defined
		



		// var finalData = this.get('dataAgg').groupBySum({})

		

		

		/*tolaGraphConfig.metadata = {
		    	labelList: this.get('dataAgg').oneDimensionGroupKeys(scopeData, [], scopeDataModel[0].field.assigned),
		    	metricList: this.get('dataAgg').oneDimensionSumValues(scopeData, [], scopeDataModel[0].field.assigned, scopeDataModel[1].field.assigned)
		    };*/

		
		

		/*tolagraphConfig.metadata.metricList = tolagraphConfig.metadata.metricList
		  									  .map(function(d) { return d.value; });*/
		
		// ok, use our master config and create the tolagraph
		// var barGraph = Tolagraph.create(tolaGraphConfig);
		/*barGraph.render = function() {
			new Chart(this.element, tolaGraphConfig);
		};*/


		// data setup
		/*var scopeData = this.get('scopeData'),
		    scopeDataModel = this.get('scopeDataModel'),
		    graphConfig = this.get('graphConfig');*/
		

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

		

		// the data aggregation service is used to get the pieces needed to populte this
		

		
	

	willDestroyElement: function() {
		console.log('willDestroyElement on bar chart component called');
	},



	
	
	
});
