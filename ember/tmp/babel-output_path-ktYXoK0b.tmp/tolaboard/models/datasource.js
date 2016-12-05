define('tolaboard/models/datasource', ['exports', 'ember-data/model', 'ember-data'], function (exports, _emberDataModel, _emberData) {
	// import attr from 'ember-data/attr';
	// import { belongsTo, hasMany } from 'ember-data/relationships';

	var attr = _emberData['default'].attr;

	exports['default'] = _emberDataModel['default'].extend({
		type: _emberData['default'].attr('string'),
		sourceId: _emberData['default'].attr('string'),
		label: _emberData['default'].attr('string'),
		createDate: _emberData['default'].attr('date')

	});
});