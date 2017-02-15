import DS from 'ember-data';

export default DS.Model.extend({
    item: DS.belongsTo('item', {async: false}),
    graphmodel: DS.belongsTo('graphmodel', {async: false}),
    graphmodelvalue: DS.attr('string'),
    aggregationfunction: DS.attr('string'),
});
