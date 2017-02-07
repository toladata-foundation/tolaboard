import DS from 'ember-data';

export default DS.Model.extend({
	label: DS.attr('string'),
	img: DS.attr('string'),
	component: DS.attr('string'),
	dataModel: DS.attr(),
	enabled: DS.attr('boolean')

});
