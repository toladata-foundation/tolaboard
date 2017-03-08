import Ember from 'ember';

export default Ember.Route.extend({

    // session: Ember.inject.service(),
    // beforeModel: function() {
    //  var session = this.get('session');
    //  if(session.isLoggedIn === false) {
    //      this.transitionTo('login');
    //  }
    // },
    model(params) {
        this.store.query('item', {board: params.board_id});
        return this.store.findRecord('board', params.board_id);
    },

    
    actions: { // move out of here and into tolaboard designer component
      onAddItem() {
        console.log('add item', this);
        // var newItem = this.store.createRecord('item', {
        //   board: this.model,
        //   title: 'blank',
        //   widgetcol: 1,
        //   widgetrow: 1,
        //   widgetsizex: 1,
        //   widgetsizey: 1,
        // });

      }
    }
});
