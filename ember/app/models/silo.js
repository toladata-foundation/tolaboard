import Model from 'ember-data/model';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

var attr = DS.attr;

export default Model.extend({
	recordsTotal: DS.attr('number'),
	recordFiltered: DS.attr('number'),
	draw: DS.attr('number'),
	rawData: DS.attr()

});