import DS from 'ember-data';
// import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';


export default DS.JSONAPIAdapter.extend(/*DataAdapterMixin,*/ {
  host: ENV.API.url,
  namespace: 'api',
  headers: {
    "Content-Type": "application/vnd.api+json",
    "Authorization": ENV.API.token
  },

    // pathForType(model) {
    //   return 'silo';
    // },





  // buildUrl(modelName, id, snapshot, requestType, query) {
  //     console.log('buildUrl', id, snapshot, requestType, query);
  //     return 'api/' + Ember.String.singularize(modelName) + '/' + id + '/data';
  //   }
    // authorizer: 'authorizer:drf-token-authorizer',
});
