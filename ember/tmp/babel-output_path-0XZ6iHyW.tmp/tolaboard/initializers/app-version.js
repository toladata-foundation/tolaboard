define('tolaboard/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'tolaboard/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _tolaboardConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_tolaboardConfigEnvironment['default'].APP.name, _tolaboardConfigEnvironment['default'].APP.version)
  };
});