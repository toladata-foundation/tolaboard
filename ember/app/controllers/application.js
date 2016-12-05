/* applicaiton.js controller is for application level processes needed when the app loads */
import Ember from 'ember';

export default Ember.Controller.extend({

	session: Ember.inject.service(),
	store: Ember.inject.service(),

	/* tolaboards for menu dropdowns */

	/*validateToken(){
	    return new Promise((resolve, reject)=>{
	      Ember.$.ajax({
	        method: "POST",
	        url: '//localhost:2021/session',
	        
	      }).then((data)=>{
	        console.log('data from token validator', data)
	        resolve()
	      }, ()=>{
	        reject('promise rejection')
	      })
	    })
	  },*/

	init: function() {

		this._super(...arguments);

		window.googleSignOut = function() {
      		var auth2 = gapi.auth2.getAuthInstance();
		    auth2.signOut().then(function () {
		      console.log('User signed out.');
		    });
      	}

      	gapi.load('auth2', function() {
	        gapi.auth2.init();
	      });
		/* token auth */
		console.log('application.js init invoked')
		var appToken = Cookies.get('appToken');

		var store = this.get('store');
		console.log('store...',store);
		/*this.set('ownerBoards', store.query('board', {policy: 'owner'}));
		this.set('sharedBoards', store.query('board', {policy: 'view'}));
		this.set('updateBoards', store.query('board', {policy: 'update'}));*/

		

		// this.set('editBoards')
		/* Will not be true when first loading, but will be */
		if(appToken) {	

			var result = this.get('session').initializeFromCookie();
			this.set('ownerBoards', store.query('board', {policy: 'owner'}));
			this.set('sharedBoards', store.query('board', {policy: 'view'}));
			this.set('updateBoards', store.query('board', {policy: 'update'}));
			result.then((data)=>{
				// this.transitionToRoute('mydashboards')
			}, ()=>{
				Cookies.remove('appToken')
				/*this.set('session','currUser',null)
				this.set('session','isLoggedIn',false)*/
				this.transitionToRoute('login')
			})
			

			

		} else { 
			/* No token/auth, perform some cleanup, redirect to login*/
			// console.log('session from application.js', this.get('session'))
			// cleanup to be sure
			// console.log('app controller',this)
			/*this.get('session','currentUser',null)
			this.set('session','isLoggedIn',false)*/
			// redirct to where user can authenticate
			this.transitionToRoute('login')
			}
	},
});