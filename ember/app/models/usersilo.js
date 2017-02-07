import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	public: DS.attr('boolean'),
	description: DS.attr('string'),
	create_date: DS.attr('date')
	// url_data: DS.attr('string')

});
