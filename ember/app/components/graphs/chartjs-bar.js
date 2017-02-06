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
		console.log('INSERT BAR GRAPH',this);

		var siloId = this.get('tbItemConfig').get('source');
		// var graphInputs = this.get('tbItemConfig').graphinputs;
		console.log('siloId',siloId);

		// returns promise, on resolution returns d3.nest of aggregated data
		// var tablesData = this.get('dataAgg').groupBySum(sourceId, dataModel);


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

			/* For some reason, tbItemConfig is not a full fledged Ember Object when
			   coming from a persisted Tolaboard via the store, unlike when coming from designer.
			   Thus, object setters and getters not available, so using generic Ember.set */

			// self.get('tbItemConfig').get('graph').set('config', barConfig);
			Ember.set(self.get('tbItemConfig').graph, 'config', barConfig);

			// console.log('barConfig', barConfig);
			var ctx = Ember.$('#'+ self.get('elementId') + ' canvas');
						console.log('ctx', ctx)

			ctx.resize(function() {
				'resize detected';
			});


			var barChart = new Chart(ctx, barConfig);
			// console.log('testChart', barChart)

		})








	},	// end didInsertElement


	willDestroyElement: function() {
		console.log('willDestroyElement on bar chart component called');
	},

});
