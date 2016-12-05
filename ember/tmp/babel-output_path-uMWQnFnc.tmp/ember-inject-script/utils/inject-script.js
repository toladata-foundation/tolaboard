define('ember-inject-script/utils/inject-script', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = injectScript;

  function injectScript(src) {
    return new _ember['default'].RSVP.Promise(function (resolve) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = src;
      script.onload = function () {
        resolve();
      };
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }
});