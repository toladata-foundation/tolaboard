define('tolaboard/services/session', ['exports', 'ember', 'tolaboard/config/environment'], function (exports, _ember, _tolaboardConfigEnvironment) {
	exports['default'] = _ember['default'].Service.extend({

		routing: _ember['default'].inject.service('-routing'),

		// currentUser: null,
		isLoggedIn: false,
		currentUser: null,

		gLogin: function gLogin(googleToken) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_ember['default'].$.ajax({
					method: "POST",
					url: _tolaboardConfigEnvironment['default'].API.url + '/auth',
					headers: {
						"Content-Type": "application/json",
						"Authorization": googleToken
					}
				}).then(function (data) {
					// console.log('google auth success!!')	      	
					Cookies.set('appToken', data.appToken);
					Cookies.set('googleToken', data.googleToken);

					// at this point, we know we have a good appToken, so attempt init again
					_this.initializeFromCookie();
					resolve();

					// console.log('session service sending you to index')

					if (Cookies.get('storeInitialized') === undefined) {
						Cookies.set('storeInitialized', true);
						window.location.reload(true);
					} else {
						_this.get("routing").transitionTo("index");
					}
				}, function () {
					reject('Unable to authenticate with Google Sign-In');
				});
			});
		},

		getSession: function getSession(appToken) {
			var _this2 = this;

			return new Promise(function (resolve, reject) {
				_ember['default'].$.ajax({
					method: "POST",
					url: _tolaboardConfigEnvironment['default'].API.url + '/auth/session'
				}). /*headers: { 
        	"Content-Type": "application/json",
        	"Authorization": googleToken
        }        */
				then(function (data) {
					// set cookies, then call initializer to build session
					// console.log('successful session auth', data)

					var currUser = _ember['default'].Object.create();
					currUser.set('fullName', data.fullName);
					currUser.set('email', data.email);
					currUser.set('userId', data.userId);
					currUser.set('picture', data.picture);

					_this2.set('currentUser', currUser);
					_this2.set('isLoggedIn', true);
					// console.log('ember session...', this)

					resolve();
				}, function () {
					_this2.logout();
					reject('Username and password did not match');
				});
			});
		},

		logout: function logout() {
			var appController = this; // that's what called it
			// console.log('app controller..',this)
			var session = appController.get('session');
			session.set('currentUser', null);
			session.set('isLoggedIn', false);
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
		initializeFromCookie: function initializeFromCookie() {
			var _this3 = this;

			return new Promise(function (resolve, reject) {
				_ember['default'].$.ajax({
					method: "POST",
					url: _tolaboardConfigEnvironment['default'].API.url + '/auth/session'
					/* NOTE: header with token handled by ajax-prefilter.js initializer */

				}).then(function (data) {
					// console.log('appToken good!!!!! make session', this)
					var currUser = _ember['default'].Object.create();

					currUser.set('fullName', data.data.name);
					currUser.set('picture', data.data.picture);
					currUser.set('email', data.data.email);
					currUser.set('userId', data.data.email.split('@')[0]);

					// console.log('this atm is...',this)
					_this3.set('currentUser', currUser);
					_this3.set('isLoggedIn', true);

					resolve();
				}, function () {
					reject('promise rejection');
					// this.transitionTo('login')
				});
			});
		}

	});
});