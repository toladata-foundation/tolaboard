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
      /* This is pulling all of the boards, items and graphinputs I suspect
         It would be nice to get this fixed to pull just the child elements needed
         The model async prop didn't seem to be working, so sitting it to false didn't load data
      */
        this.store.query('item', {board: params.board_id});
        this.store.findAll('graphinput'); // cheating... pulling all of them
        return this.store.findRecord('board', params.board_id);
    },
    afterModel(model, transition) {

    }
});
