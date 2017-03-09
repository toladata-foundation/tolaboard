import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
    restore(data) {
        return new Ember.RSVP.Promise((resolve, reject) => {
            if (!Ember.isEmpty(data.token)) {
                resolve(data);
            } else {
                reject();
            }
        });
    },

    authenticate() {
        return new Ember.RSVP.Promise((resolve, reject) => {
            let token = Cookies.get('token');
            if (typeof(token) !== 'undefined') {
                Ember.run(function() {
                    resolve({
                        token: token
                    });
                });
            } else {
                Ember.run(function() {
                    reject();
                });
            }
        });
    },

    invalidate(data) {
    }
});
