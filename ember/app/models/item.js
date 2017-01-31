import DS from 'ember-data';

export default DS.Model.extend({
    board: DS.belongsTo('board', {inverse: 'items', async: false}),
    source: DS.belongsTo('silo', {inverse: 'items', async: false}),
    title: DS.attr('string'),
    widgetcol: DS.attr('number'),
    widgetrow: DS.attr('number'),
    widgetsizex: DS.attr('number'),
    widgetsizey: DS.attr('number'),
    graph: DS.belongsTo('graph', {inverse: 'item', async: false})
});
