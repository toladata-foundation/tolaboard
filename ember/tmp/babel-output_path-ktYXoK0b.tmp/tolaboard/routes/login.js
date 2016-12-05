define('tolaboard/routes/login', ['exports', 'ember', 'ember-inject-script'], function (exports, _ember, _emberInjectScript) {
	exports['default'] = _ember['default'].Route.extend({

		/*session: Ember.inject.service(),
  beforeModel: function() {
  	// console.log('beforeModel on login route invoked', this.get('session').isLoggedIn);
  	if(this.get('session').isLoggedIn==='true' || this.get('session').isLoggedIn === true) {
  		console.log('login route detected session',this.get('session'))
  		this.transitionTo('mydashboards');
  	}
  },*/

		/* https://www.npmjs.com/package/ember-cli-meta-tags*/
		headTags: [{ type: 'meta',
			// tagId: 'name',
			attrs: {
				name: 'google-signin-scope',
				content: 'profile email'
			} /*,
     // optional element content 
     content: 'Element content here'*/
		}, { type: 'meta',
			// tagId: 'name',
			attrs: {
				name: 'google-signin-client_id',
				content: '469831917669-hi4tku7ob2j0k5tapf8856225q2hk7lr.apps.googleusercontent.com'
			} }],

		init: function init() {
			this._super.apply(this, arguments);

			// kludgy way to inject google script, perhaps a cli add-on will exist someday
			var scriptIsLoaded = $("script[src='//apis.google.com/js/platform.js']")[0];
			/*if (!scriptIsLoaded) {
   	injectScript("//apis.google.com/js/platform.js").then(function() {
   		
   	});
   }*/
		}

	});
});
/* Handles the single-signon using Google's oAuth2 

   The template contains the intro to TolaBoard, along with the google button.
   User clicks, and gets prompted by google to verify sharing of info with app.
   js file needs to ta
   */