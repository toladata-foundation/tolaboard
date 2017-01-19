import DS from 'ember-data';

export default DS.Model.extend({
    graph: DS.belongsTo('Graph', {inverse: 'graphinputs', async: false}),
    graphinput: DS.attr('string'),
    aggregationfunction: DS.attr('string'),
});
