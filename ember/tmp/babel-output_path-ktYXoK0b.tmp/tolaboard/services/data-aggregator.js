define('tolaboard/services/data-aggregator', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Service.extend({

		store: _ember['default'].inject.service(),
		/* clients of this service will pass data, filter, grouping and sum
     fields via arrays. Then this service returns a js object with
     results aggregated and ready for use */

		// pass in data source ID and populate data model
		// returns aggregated JS data object
		groupBySum: function groupBySum(sourceId, dataModel) {
			return new _ember['default'].RSVP.Promise(function (resolve, reject) {
				_ember['default'].$.ajax({
					method: "GET",
					url: 'http://localhost:2021/api/data/' + sourceId
				}).then(function (data) {
					// data is our raw response from Tables
					var result = JSON.parse(data).data;
					var groupName = dataModel[0].assigned,
					    sumName = dataModel[1].assigned;
					// use dataModel with d3.nest to return aggregated data
					var nest = d3.nest().key(function (d) {
						return d[groupName];
					}).rollup(function (rows) {
						return d3.sum(rows, function (d) {
							return d[sumName];
						});
					}).entries(result);

					// return nest;
					/*console.log('data from getJSON', data)			
     console.log('nest',nest)*/
					resolve(nest);
				}, function () {
					reject('reject path');
				});
			});
		},

		selectWhere: function selectWhere(sourceId, filters) {
			// use sourceId to pull data, then select only cols needed
			// use filters to limit returned data
			return new _ember['default'].RSVP.Promise(function (resolve, reject) {
				_ember['default'].$.ajax({
					method: "GET",
					url: 'http://localhost:2021/api/data/' + sourceId
				}).then(function (data) {
					// data is our raw response from Tables
					var result = JSON.parse(data).data;
					/* if filters array has any elements, use key/val pairs to remove
     record from results */

					resolve(result);
				}, function () {
					reject('data aggregator selectWhere promise failed');
				});
			});
		},

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