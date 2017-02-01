import DS from 'ember-data';

export default DS.Model.extend({
    board: DS.belongsTo('board', {async: false}),
    source: DS.belongsTo('silo', {async: false}),
    title: DS.attr('string'),
    widgetcol: DS.attr('number'),
    widgetrow: DS.attr('number'),
    widgetsizex: DS.attr('number'),
    widgetsizey: DS.attr('number'),
    graph: DS.belongsTo('graph', {async: true})
});
