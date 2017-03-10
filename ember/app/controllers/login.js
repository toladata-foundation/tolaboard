import Ember from 'ember';

export default Ember.Controller.extend({

	session: Ember.inject.service(),


	/* This is kinda kludgy, and is basically setup to allow google to talk to our app

	Overview: We need to define a callback for google signin to call once the user is authenticated.
	This is defined in the data-onSuccess attribute for the button. My first approach was to place this
	call back in the actions, and reference with the action helper syntax. However, our app is not invoking
	this function... Google is.  So it just need to live in the DOM somehow. The method below injects a raw
	javascript function into the DOM via calling a function that defines the callback, and places it in the
	global scope (window) */

	createSignInFunc: function(ctrl) {

		var onSignIn = function(googleUser) {
	        // Useful data for your client-side scripts:
	        var profile = googleUser.getBasicProfile();

	        // The ID token to pass to the backend:
	        var id_token = googleUser.getAuthResponse().id_token;
	        console.log("ID Token: " + id_token);
	        // ctrl.set('id_token',id_token);
	        // Cookies.set('googleToken',id_token);





	        //console.log('call session login with token');
	        //ctrl.get('session').gLogin(id_token);

	        // POST auth token

	        /*$.post("/", id_token, function(data, status){
		        console.log('client:',data);
		        console.log(status);
		    });*/
      	};

      	// assign our sign in method to global
      	window.onSignIn = onSignIn;



	},



	init: function() {
		this._super(...arguments);

		// pass this controller into our hacky signin, so we can put google token inside
		this.get('createSignInFunc')(this);

		// another hack... make the google signout accessable from any where
      	window.googleSignOut = function() {
      		Cookies.remove('storeInitialized');
      		var auth2 = gapi.auth2.getAuthInstance();
		    auth2.signOut().then(function () {
		      console.log('User signed out.');
		    });
      	}
      	window.gapi = gapi;
	} // end init




  })