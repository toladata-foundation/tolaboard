import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service(),

    beforeModel() {
        this.get('session').authenticate('authenticator:drf-token-authenticator');
    },

});
