import DS from 'ember-data';

export default DS.Model.extend({
    owner: DS.belongsTo('user', {async: false}),
    items: DS.hasMany('item', {async: true}),
    title: DS.attr('string'),
    createDate: DS.attr('date'),
    updateDate: DS.attr('date')

});
