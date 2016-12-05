define('tolaboard/app', ['exports', 'ember', 'tolaboard/resolver', 'ember-load-initializers', 'tolaboard/config/environment'], function (exports, _ember, _tolaboardResolver, _emberLoadInitializers, _tolaboardConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _tolaboardConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _tolaboardConfigEnvironment['default'].podModulePrefix,
    Resolver: _tolaboardResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _tolaboardConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});