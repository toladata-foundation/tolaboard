import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({

	store: Ember.inject.service(),
	/* clients of this service will pass data, filter, grouping and sum
	   fields via arrays. Then this service returns a js object with
	   results aggregated and ready for use */

	// pass in data source ID and populate data model
	// returns aggregated JS data object
	groupBySum(sourceId,dataModel){
		return new Ember.RSVP.Promise((resolve, reject)=>{
	      Ember.$.ajax({
	        method: "GET",
	        url: ENV.API.url + '/api/data/' + sourceId
	      }).then((data)=>{	        
	      	// data is our raw response from Tables
	      	var result = JSON.parse(data).data;
	      	result.forEach(function(d) { d.row_count = 1});
	      	var groupName = dataModel[0].assigned,
	      	    sumName = dataModel[1].assigned;
	      	// use dataModel with d3.nest to return aggregated data
	      	var nest = d3.nest()
				           .key(function(d) { return d[groupName]})
				           .rollup(function(rows) {
				           		return d3.sum(rows, function(d) { return d[sumName];})
				           })
				           .entries(result);

			// return nest;
			/*console.log('data from getJSON', data)			
			console.log('nest',nest)*/
	        resolve(nest)
	      }, ()=>{
	        reject('reject path')
	      })
	    })
	},

	selectWhere(sourceId, filters) {
		// use sourceId to pull data, then select only cols needed
		// use filters to limit returned data
		return new Ember.RSVP.Promise((resolve, reject)=>{
	      Ember.$.ajax({
	        method: "GET",
	        url: ENV.API.url + '/api/data/' + sourceId
	      }).then((data)=>{	        
	      	// data is our raw response from Tables
	      	var result = JSON.parse(data).data;
	      	/* if filters array has any elements, use key/val pairs to remove
	      	record from results */

	        resolve(result)
	      }, ()=>{
	        reject('data aggregator selectWhere promise failed')
	      })
	    })

	},

	selectPreview(sourceId, rowCount) {
		// use sourceId to retrieve data, but limit to rowCount
		return new Ember.RSVP.Promise((resolve, reject)=>{
	      Ember.$.ajax({
	        method: "GET",
	        url: ENV.API.url + '/api/data/' + sourceId
	      }).then((data)=>{	        
	      	// data is our raw response from Tables
	      	var result = JSON.parse(data).data.slice(0,20);
	      	/* if filters array has any elements, use key/val pairs to remove
	      	record from results */

	        resolve(result)
	      }, ()=>{
	        reject('data aggregator selectPreview promise failed')
	      })
	    })

	},

	oneDimensionGroupKeys: function(data, filterArr, groupField) {
		return d3.set(data.map(function(d) { 
			return d[groupField]; 
		})).values();
	},

	oneDimensionSumValues: function(data, filterArr, groupName, sumName) {

		var nest = d3.nest()
		           .key(function(d) { return d[groupName]})
		           .rollup(function(rows) {
		           		return d3.sum(rows, function(d) { return d[sumName];})
		           })
		           .entries(data);

		return nest;


	}
});
