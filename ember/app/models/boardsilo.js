import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	description: DS.attr('string'),
  create_date: DS.attr('date'),
  public: DS.attr('boolean'),
  silodata: DS.attr('string') // url to retrieve data

});
