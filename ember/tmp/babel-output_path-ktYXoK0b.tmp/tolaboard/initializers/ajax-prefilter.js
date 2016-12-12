define('tolaboard/initializers/ajax-prefilter', ['exports'], function (exports) {
  exports.initialize = initialize;
  /* Initializer that runs for every ajax request within app */

  function initialize(application) {
    Ember.$.ajaxPrefilter(function (options, originalOptions, jqXHR) {

      var token = Cookies.get('appToken');

      if (typeof token !== 'undefined') {
        jqXHR.setRequestHeader('xhrFields', { withCredentials: true });
        jqXHR.setRequestHeader('Authorization', token);
      } else {
        console.log('no token in ajax-prefilter');
        // console.log(application)
      }
    });
  }

  exports['default'] = {
    name: 'ajax-prefilter',
    initialize: initialize
  };
});