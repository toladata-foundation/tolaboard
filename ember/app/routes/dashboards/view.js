import Ember from 'ember';

export default Ember.Route.extend({

    // session: Ember.inject.service(),
    // beforeModel: function() {
    //  var session = this.get('session');
    //  if(session.isLoggedIn === false) {
    //      this.transitionTo('login');
    //  }
    // },
    model: function(params) {
      // look in asset tracker for config to not do this
        this.store.query('item', {board: params.board_id});
        return this.store.findRecord('board', params.board_id);
    },
    afterModel() {
      console.log('view model',this);
    }
});
