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
    }
});
