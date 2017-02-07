import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
	description: DS.attr('string'),
  create_date: DS.attr('date'),
  silodata: DS.attr('string'),
  public: DS.attr('boolean')
});
