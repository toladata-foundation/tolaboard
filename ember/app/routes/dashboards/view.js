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
        this.store.findAll('item');
        return this.store.findRecord('board', params.board_id);
    },
    afterModel() {
      console.log('view model',this);
    }
});
