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