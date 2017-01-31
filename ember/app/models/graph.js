import DS from 'ember-data';

export default DS.Model.extend({
    owner: DS.belongsTo('user', {async: false}),
    thumbnail: DS.attr('string'),
    ember_component: DS.attr('string'),
    item: DS.belongsTo('item', {async: true}),
});
