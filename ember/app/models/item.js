import DS from 'ember-data';

export default DS.Model.extend({
    board: DS.belongsTo('board', {async: false}),
    boardsilo: DS.belongsTo('boardsilo', {async: true}),
    title: DS.attr('string'),
    widgetcol: DS.attr('number'),
    widgetrow: DS.attr('number'),
    widgetsizex: DS.attr('number'),
    widgetsizey: DS.attr('number'),
    graph: DS.belongsTo('graph', {async: true})
});
