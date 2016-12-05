define('tolaboard/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'tolaboard/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _tolaboardConfigEnvironment) {

  var name = _tolaboardConfigEnvironment['default'].APP.name;
  var version = _tolaboardConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});