/* applicaiton.js controller is for application level processes needed when the app loads 

   This code runs whenever the application is loaded via linking to the app, or
   refreshing the browser. Use this area for code that needs to run once, regardless
   of the entry point/route into the app.
*/
import Ember from 'ember';

export default Ember.Controller.extend({

	/* "session" in ember isn't some pre-defined piece of functionality. It's just
	   another Ember service. It doesn't persist across app reloads.*/
	session: Ember.inject.service(),
	store: Ember.inject.service(),

	/* tolaboards for menu dropdowns */

	/* First off, need to check to see if we have an appToken in our cookies
	   and use it to try and get a session from the 
	*/


	init: function() {		

		this._super(...arguments);

		console.log('application.js init invoked');

		var appToken = Cookies.get('appToken');

		if(typeof(appToken) === 'undefined') {			
			this.transitionToRoute('login');
		} else {
			// token exists, attempt to verify with server			
			var result = this.get('session').initializeFromCookie();
			var store = this.get('store');
			this.set('ownerBoards', store.query('board', {policy: 'owner'}));
			this.set('sharedBoards', store.query('board', {policy: 'view'}));
			this.set('updateBoards', store.query('board', {policy: 'update'}));
			result.then((data)=>{
				console.log('data from app init',data)
				// this.transitionToRoute('mydashboards')
			}, ()=>{
				Cookies.remove('appToken')
				/*this.set('session','currUser',null)
				this.set('session','isLoggedIn',false)*/
				console.log('redirect to login')
				this.transitionToRoute('login')
			})
		}

		window.googleSignOut = function() {
      		var auth2 = gapi.auth2.getAuthInstance();
		    auth2.signOut().then(function () {
		      console.log('User signed out.');
		    });
      	}

      	/*gapi.load('auth2', function() {
	        gapi.auth2.init();
	      });*/

		/* token auth */
		
		// var appToken = Cookies.get('appToken');

		// var store = this.get('store');
		// console.log('store...',store);
		/*this.set('ownerBoards', store.query('board', {policy: 'owner'}));
		this.set('sharedBoards', store.query('board', {policy: 'view'}));
		this.set('updateBoards', store.query('board', {policy: 'update'}));*/

		

		// this.set('editBoards')
		/* Will not be true when first loading, but will be */
		/*if(appToken) {	

			var result = this.get('session').initializeFromCookie();
			this.set('ownerBoards', store.query('board', {policy: 'owner'}));
			this.set('sharedBoards', store.query('board', {policy: 'view'}));
			this.set('updateBoards', store.query('board', {policy: 'update'}));
			result.then((data)=>{
				// this.transitionToRoute('mydashboards')
			}, ()=>{
				Cookies.remove('appToken')				
				this.transitionToRoute('login')
			})
			

			

		} else { 			
			// console.log('session from application.js', this.get('session'))
			// cleanup to be sure
			// console.log('app controller',this)
			// this.get('session','currentUser',null)
			// this.set('session','isLoggedIn',false)
			// redirct to where user can authenticate
			this.transitionToRoute('login')
			}*/
	},
});