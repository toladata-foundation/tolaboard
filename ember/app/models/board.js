import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.belongsTo('owner', {async: false}),
  items: DS.hasMany('item', {inverse: 'board', async: false}),
  title: DS.attr('string'),
  created: DS.attr('date'),
  // updateDate: DS.attr('date')

});
