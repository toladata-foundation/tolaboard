/* Every graph component is responsible for defining its own 
   tbItemConfig.graph.config property using the tbItemConfig value passed in
	
	"config": {
			"type": "pie",
			"data": {
				"labels": ["Prague", "Budapest", "Berlin"],
				"datasets": [{
					"data": [18,19,20],
					"backgroundColor": "teal"
				}]
			},
			"options": {}
		}
	}
*/
import Ember from 'ember';

export default Ember.Component.extend({

	didInsertElement: function() {

		console.log('TEST GRAPH containing tbItemConfig ===> ',this);
		var config = this.get('tbItemConfig').graph.config;		

		/* chart.js pie graph config template */
		var newConfig = {
			type: "pie",
			data: {
				labels: [], // ==> needs defined
				datasets: [{
					data: [18,19,20], // ==> need defined
					backgroundColor: "teal"
				}]
			},
			options: {}
		}

		var queryObj = {url: this.get('dataSourceUrl'),
		 				groupName: this.get('scopeDataModel')[0].assigned,
		 				sumName: this.get('scopeDataModel')[1].assigned};


		$.getJSON(queryObj.url, function(data) { 
			data = JSON.parse(data);
			
			var nest = d3.nest()
		           .key(function(d) { return d[queryObj.groupName]})
		           .rollup(function(rows) {
		           		return d3.sum(rows, function(d) { return d[queryObj.sumName];})
		           })
		           .entries(data.data);

			// return nest;
			console.log('data from getJSON', data)			
			console.log('nest',nest)

			var labelArr = nest.map(function(d) { return d.key})
			var dataArr = nest.map(function(d) { return d.value})

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

			console.log('barConfig', barConfig);

		// var graph = new Chart(this.get('element'), fooConfig);


		var ctx = self.$('canvas');
		
		ctx.resize(function() {
			'resize detected';
		});

		var testChart = new Chart(ctx, barConfig);

		})
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
		

		/*var ctx = this.$('canvas');
		
		ctx.resize(function() {
			'resize detected';
		});

		var testChart = new Chart(ctx, config);
		console.log('TEST CHART',testChart)*/
	}


	
});
