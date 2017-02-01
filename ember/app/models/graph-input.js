import DS from 'ember-data';

export default DS.Model.extend({
    graphinput: DS.belongsTo('item', {async: false}),
    graph: DS.belongsTo('graph', {inverse: 'graph-input', async: false}),
    graphinput: DS.attr('string'),
    aggregationfunction: DS.attr('string'),
});
