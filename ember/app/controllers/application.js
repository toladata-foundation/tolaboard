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
			// this.transitionToRoute('login'); disable session login

		} else {
			// token exists, attempt to verify with server

			// returns Promise
			// var result = this.get('session').initializeFromCookie();
			var store = this.get('store');
			console.log('store==>',store);
			this.set('ownerBoards', store.query('board', {policy: 'owner'}));
			this.set('sharedBoards', store.query('board', {policy: 'view'}));
			this.set('updateBoards', store.query('board', {policy: 'update'}));

			// result of Promise from initializeFromCookie

			/* result.then((data)=>{
				this.transitionToRoute('mydashboards')
			}, ()=>{
				Cookies.remove('appToken');
				console.log('redirect to login');
				this.transitionToRoute('login')
			})*/

		}

		window.googleSignOut = function() {
      		var auth2 = gapi.auth2.getAuthInstance();
		    auth2.signOut().then(function () {
		      console.log('User signed out.');
		    });
      	}


	},
});
