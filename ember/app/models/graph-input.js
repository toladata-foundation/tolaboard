import DS from 'ember-data';

export default DS.Model.extend({
    graph: DS.belongsTo('graph', {inverse: 'graph-input', async: false})
    graphinput: DS.attr('string'),
    aggregationfunction: DS.attr('string'),
});
