/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'tolaboard',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    // Doco on contentSecurity policy configs... https://github.com/rwjblue/ember-cli-content-security-policy
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
      // url: 'https://tola-tables-dev.mercycorps.org',
      url: 'http://localhost:8000',
      previewSize: 20, // num of records to show in preview
      //token: 'Token 88d3573a445f19c17ea4fa68c0431c396bc55cdd'
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
    ENV.API.url = 'https://tola-tables-dev.mercycorps.org';
  }

  return ENV;
};
