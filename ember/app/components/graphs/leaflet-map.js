import Ember from 'ember';

export default Ember.Component.extend({

	dataAgg: Ember.inject.service('data-aggregator'),

	lat: 37.0660,
	lng: 37.3781,
	zoom: 10,

	didInsertElement() {
		console.log('LEAFLET MAP',this);

		// returns promise, on resolution returns d3.nest of aggregated data
		var tablesData = this.get('dataAgg').selectWhere(sourceId, []),
			latField = dataModel['lat'],
			lngField = dataModel['lng'];
		
		tablesData.then(function(result) {
			/* result js object has our filtered results (eventually)
			   we need the lat and long from our model to make the data set of points
			*/

			// get average lat and long
			var latAvg = d3.sum(result, function(d) { return d[latField]})/result.length;
			var lngAvg = d3.sum(result, function(d) { return d[lngField]})/result.length;
		})

	}
});
