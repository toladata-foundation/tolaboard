import DS from 'ember-data';

export default DS.Model.extend({
    // owner: DS.belongsTo('user', {async: false}),
    label: DS.attr('string'),
    thumbnail: DS.attr('string'),
    embercomponent: DS.attr('string'),
    // item: DS.belongsTo('item', {async: false}),
});
