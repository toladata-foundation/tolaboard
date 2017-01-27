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

    model() {
        return this.store.findAll('board');
    }
});