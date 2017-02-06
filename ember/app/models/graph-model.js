import DS from 'ember-data';

export default DS.Model.extend({
    graph: DS.belongsTo('graph', {inverse: 'graph-model', async: false}),
    name: DS.attr('string'),
    label: DS.attr('string'),
    isrequired: DS.attr('boolean'),
    inputtype: DS.attr('string'),
});
