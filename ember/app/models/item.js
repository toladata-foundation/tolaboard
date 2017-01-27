import DS from 'ember-data';

export default DS.Model.extend({
    board: DS.belongsTo('Board', {inverse: 'items', async: false}),
    source: DS.belongs('Silo', {inverse: 'items', async: false}),
    title: DS.attr('string'),
    widgetcol: DS.attr('number'),
    widgetrow: DS.attr('number'),
    widgetsizex: DS.attr('number'),
    widgetsizey: DS.attr('number'),
    graph: DS.belongsTo('Graph', {inverse: 'items', async: false}),
});
