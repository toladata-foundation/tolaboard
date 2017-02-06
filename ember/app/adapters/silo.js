import DS from 'ember-data';
// import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';


export default DS.JSONAPIAdapter.extend(/*DataAdapterMixin,*/ {
  host: ENV.API.url,
  namespace: 'api',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": ENV.API.token
  },

    // pathForType(model) {
    //   return 'silo';
    // },

  urlForFindRecord(id, modelName, snapshot) {
    let baseUrl = this.buildURL();
    return `${baseUrl}/silo/${id}/data`;
  },



  // buildUrl(modelName, id, snapshot, requestType, query) {
  //     console.log('buildUrl', id, snapshot, requestType, query);
  //     return 'api/' + Ember.String.singularize(modelName) + '/' + id + '/data';
  //   }
    // authorizer: 'authorizer:drf-token-authorizer',
});
