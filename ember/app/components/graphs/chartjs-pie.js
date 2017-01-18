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


		var sourceId = this.get('tbItemConfig').graph.source;
		var dataModel = this.get('tbItemConfig').graph.dataModel;

		// returns promise, on resolution returns d3.nest of aggregated data
		var tablesData = this.get('dataAgg').groupBySum(sourceId, dataModel);

		var self = this;
		tablesData.then(function(result) {
			var labelArr = result.map(function(d) { return d.key});
			var dataArr = result.map(function(d) { return d.value});

			var pieConfig = Ember.Object.create({
						type: "pie",
						data: Ember.Object.create({
							labels: labelArr,
							datasets: [Ember.Object.create({
								data: dataArr,
								backgroundColor: ['#4BCF3D','#F2637A','#FFA268','#C451A4','#4BC3BE','#5B7FCC','#9F54CC','#FFE464','#FFA964','#FFFE64','#D7D7D7','#7F7F7F','#D2A868','#FFD592','#BAEE46','#FDFB4A']
							})]
						}),
						options: {
							legend: {
								position: 'bottom'
							}
						}
			});

			// self.get('tbItemConfig').get('graph').set('config', pieConfig);
			Ember.set(self.get('tbItemConfig').graph, 'config', pieConfig);

			// console.log('barConfig', pieConfig);
			var ctx = Ember.$('#'+ self.get('elementId') + ' canvas');
						// console.log('ctx', ctx)

			ctx.resize(function() {
				'resize detected';
			});

			// Chart.defaults.global.legend.display = true;
			var pieChart = new Chart(ctx, pieConfig);




		})


	},
});
