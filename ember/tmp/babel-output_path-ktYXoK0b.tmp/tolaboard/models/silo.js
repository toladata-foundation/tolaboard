define('tolaboard/models/silo', ['exports', 'ember-data/model', 'ember-data'], function (exports, _emberDataModel, _emberData) {
	// import attr from 'ember-data/attr';
	// import { belongsTo, hasMany } from 'ember-data/relationships';

	var attr = _emberData['default'].attr;

	exports['default'] = _emberDataModel['default'].extend({
		recordsTotal: _emberData['default'].attr('number'),
		recordFiltered: _emberData['default'].attr('number'),
		draw: _emberData['default'].attr('number'),
		rawData: _emberData['default'].attr()

	});
});