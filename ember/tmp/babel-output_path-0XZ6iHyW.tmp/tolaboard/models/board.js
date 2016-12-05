define('tolaboard/models/board', ['exports', 'ember-data/model', 'ember-data'], function (exports, _emberDataModel, _emberData) {
	// import attr from 'ember-data/attr';
	// import { belongsTo, hasMany } from 'ember-data/relationships';

	var attr = _emberData['default'].attr;

	exports['default'] = _emberData['default'].Model.extend({

		title: attr('string'),
		items: attr()

	});
});