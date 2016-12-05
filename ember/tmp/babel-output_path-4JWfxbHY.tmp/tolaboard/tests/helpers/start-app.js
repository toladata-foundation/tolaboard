define('tolaboard/tests/helpers/start-app', ['exports', 'ember', 'tolaboard/app', 'tolaboard/config/environment'], function (exports, _ember, _tolaboardApp, _tolaboardConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _tolaboardConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _tolaboardApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});