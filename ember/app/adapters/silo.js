import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({  
  
  host: ENV.API.url,
  namespace: 'api',
  pathForType: function(modelName) {    
    return 'data'
  },
  shouldReloadAll: function() {
    return true; 
  }
});

