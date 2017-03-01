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
      onDeleteBoard(boardId) {
        alert("R U Sure?");
        console.log('delete board',boardId);

        this.store.find('board', boardId).then(function (board) {
          board.destroyRecord(); // => DELETE to /posts/2
});
      },
      createBoard() {
  			console.log('create board called',this.get('newTBName'));
        var newTitle = Ember.$('#newTBName').val();
        var owner = this.store.findRecord('owner', 1)
                    .then((o) => {
                      var board = this.store.createRecord('board', {
                         title: newTitle,
                         owner: o
                       });
                       function failure(reason) {
                         // handle the error
                         console.log('failure in creating board');
                       }
                       //
                       board.save().catch(failure);
                    });
        // var board = this.store.createRecord('board', {
        //   title: 'ZZZZZ TolaBoard XYZ',
        //   owner: owner
        // });
        //
        // var self = this;
        //
        //


  		} // end createBoard
    } // end actions
});
