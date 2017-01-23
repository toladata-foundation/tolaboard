/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'tolaboard',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    // contentSecurityPolicyHeader: 'Content-Security-Policy',
    contentSecurityPolicy: {
      // Allow data (xhr/websocket) from tola-tables-dev and custom-api.local
      'connect-src': ["'self'", "https://tola-tables-dev.mercycorps.org"]
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // http://188.166.7.21:3000 is the test server API
    // http://localhost:2021 ==> local dev server
    API: {
      url: 'https://tola-tables-dev.mercycorps.org',
      previewSize: 20 // num of records to show in preview
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
