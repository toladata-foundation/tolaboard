define('tolaboard/tests/helpers/resolver', ['exports', 'tolaboard/resolver', 'tolaboard/config/environment'], function (exports, _tolaboardResolver, _tolaboardConfigEnvironment) {

  var resolver = _tolaboardResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _tolaboardConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _tolaboardConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});