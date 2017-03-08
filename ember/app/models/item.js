import DS from 'ember-data';

export default DS.Model.extend({
    board: DS.belongsTo('board', {async: false}),
    source: DS.belongsTo('boardsilo', {async: true}),
    title: DS.attr('string'),
    widgetcol: DS.attr('number'),
    widgetrow: DS.attr('number'),
    widgetsizex: DS.attr('number'),
    widgetsizey: DS.attr('number'),
    graph: DS.belongsTo('graph', {async: true}),
    graphinputs: DS.hasMany('graphinput', {inverse: 'item', async: false}),

    /* tb items need to have widget props updated to reflect gridster alignment */
    didCreate() {
      // console.log('item didCreate called', this);
      var gridsterArr = Ember.$('.gridster ul').gridster().data('gridster').serialize();
      var thisItem = gridsterArr[gridsterArr.length-1]; // assumes newest element is last element

      // update model
      this.set('widgetcol', thisItem.col);
      this.set('widgetrow', thisItem.row);
      this.set('widgetsizex', thisItem.size_x);
      this.set('widgetsizey', thisItem.size_y);

      this.save(); // persist to db
    }
});
