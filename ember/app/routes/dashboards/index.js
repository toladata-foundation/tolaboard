import Ember from 'ember';

export default Ember.Route.extend({

    /*session: Ember.inject.service(),

    beforeModel() {
        var appToken = Cookies.get('appToken');
        var session = this.get('session');

        if(typeof(appToken) === 'undefined') {
            this.transitionTo('login');
        } else {
            // token exists, attempt to verify with server

            var initCookieResult = this.get('session').initializeFromCookie();
            initializeFromCookie.then(()=>{
                if(session.isLoggedIn === false) {
                    this.transitionTo('login');
                }
            },
            ()=>{})

        }
    },  */

    beforeModel() {
      console.log('index on dashboards route',this);
    },

    model() {
        return this.store.findAll('board');
    },

    actions: {
      createBoard() {
  			console.log('create board called');
        var owner = this.store.findRecord('owner', 1);
        var board = this.store.createRecord('board', {
          title: 'ZZZZZ TolaBoard XYZ',
          owner: owner
        });

        var self = this;


        function failure(reason) {
          // handle the error
          console.log('failure in creating board');
        }

        board.save().catch(failure);

  		} // end createBoard
    } // end actions
});
