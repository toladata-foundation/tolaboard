import Model from 'ember-data/model';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	// item: DS.belongsTo('item'),
	recordcnt: DS.attr('number'),
	recordfil: DS.attr('number'),
	// draw: DS.attr('number'),
	// silodata: DS.attr()
	// owner: DS.belongsTo('user'),
	// name: DS.attr('string'),
	// reads: DS.attr(),
	// description: DS.attr('string'),
	// url: DS.attr('string') // url to retrieve data

});
