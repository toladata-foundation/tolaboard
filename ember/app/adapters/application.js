import DS from 'ember-data';
// import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';


export default DS.JSONAPIAdapter.extend(/*DataAdapterMixin,*/ {
    host: ENV.API.url,
    namespace: 'api',
    pathForType: function(type) {
      return Ember.String.underscore(type);
    }
    // authorizer: 'authorizer:drf-token-authorizer',
});
