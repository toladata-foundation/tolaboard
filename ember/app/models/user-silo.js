import Model from 'ember-data/model';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

var attr = DS.attr;

export default Model.extend({
	type: DS.attr('string'),
	attributes: DS.attr(),
	relationships: DS.attr()

});
