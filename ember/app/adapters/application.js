import DS from 'ember-data';
// import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';


export default DS.JSONAPIAdapter.extend( {
    host: ENV.API.url,
    namespace: 'api',
    // pathForType: function(type) {
    //   return Ember.String.underscore(type) + 's/';
    // }
    // authorizer: 'authorizer:drf-token-authorizer',

    /* By default the JSONAPIAdapter will send each find request coming from a
     * store.find or from accessing a relationship separately to the server.
     * If your server supports passing ids as a query string, you can set
     * coalesceFindRequests to true to coalesce all find requests within a
     * single runloop. */
    coalesceFindRequests: true


});
