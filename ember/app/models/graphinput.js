import DS from 'ember-data';

export default DS.Model.extend({
    item: DS.belongsTo('item', {async: false}),
    graph: DS.belongsTo('graph', {async: false}),
    graphinput: DS.attr('string'),
    aggregationfunction: DS.attr('string'),
});
