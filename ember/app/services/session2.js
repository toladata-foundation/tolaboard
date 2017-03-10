import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({

	routing: Ember.inject.service('-routing'),

	// currentUser: null,
	isLoggedIn: false,
	currentUser: null,

	gLogin(googleToken){
	    return new Promise((resolve, reject)=>{
	      Ember.$.ajax({
	        method: "POST",
	        url: ENV.API.url + '/auth',
	        headers: { 
	        	"Content-Type": "application/json",
	        	"Authorization": googleToken
	        }        
	      }).then((data)=>{
	      	// console.log('google auth success!!$$$$$$$')	      	
	        Cookies.set('appToken', data.appToken);
	        Cookies.set('googleToken', data.googleToken);	

	        // at this point, we know we have a good appToken, so attempt init again
	        this.initializeFromCookie()	        
	        resolve()

	        // console.log('session service sending you to index')

	        if(Cookies.get('storeInitialized') === undefined) {
	        	Cookies.set('storeInitialized', true);
	        	window.location.reload(true);
	        }
	        else {	        	
	        	this.get("routing").transitionTo("index");
	        }
		    

	      }, ()=>{
	        reject('Unable to authenticate with Google Sign-In')
	      })
	    })
	  },
	  
	  

	  getSession(appToken){
	    return new Promise((resolve, reject)=>{
	      Ember.$.ajax({
	        method: "POST",
	        url: ENV.API.url + '/auth/session',
	        /*headers: { 
	        	"Content-Type": "application/json",
	        	"Authorization": googleToken
	        }        */
	      }).then((data)=>{
	      	// set cookies, then call initializer to build session
	      	// console.log('successful session auth', data)
	        	        
	        var currUser = Ember.Object.create();
	        currUser.set('fullName', data.fullName);
	        currUser.set('email', data.email);
	        currUser.set('userId', data.userId);
	        currUser.set('picture', data.picture);
	        
	        this.set('currentUser', currUser)
	        this.set('isLoggedIn', true)
	        // console.log('ember session...', this)
	        
	        resolve()


	      }, ()=>{
	      	this.logout()
	        reject('Username and password did not match')

	      })
	    })
	  },

	logout(){
		var appController = this // that's what called it
		// console.log('app controller..',this)
		var session = appController.get('session')
		session.set('currentUser',null)
		session.set('isLoggedIn',false)
		// Cookies.set('isLoggedIn',false);
		// Cookies.remove('currentUser');
		Cookies.remove('googleToken');
		Cookies.remove('appToken');

		window.googleSignOut();
		window.location.reload(true);
	    // appController.transitionToRoute('login')
		
		

		// this.transitionTo('login')
	},



	// called from anything that needs to create a session from our cookie token
	initializeFromCookie: function() {
		
		return new Promise((resolve, reject)=>{
	      Ember.$.ajax({
	        method: "POST",
	        url: ENV.API.url + '/auth/session'
	        /* NOTE: header with token handled by ajax-prefilter.js initializer */
	        
	      }).then((data)=>{
	      	// console.log('appToken good!!!!! make session', this)
	        var currUser = Ember.Object.create();
	        
			currUser.set('fullName', data.data.name);
			currUser.set('picture', data.data.picture);
			currUser.set('email', data.data.email);
		    currUser.set('userId', data.data.email.split('@')[0]);

		    // console.log('this atm is...',this)
		    this.set('currentUser', currUser);
		    this.set('isLoggedIn', true);


	        resolve()

	      }, ()=>{
	        reject('promise rejection')
	        // this.transitionTo('login')
	      })
	    })
	}

	

	
});
