define('tolaboard/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'tolaboard/tests/helpers/start-app', 'tolaboard/tests/helpers/destroy-app'], function (exports, _qunit, _tolaboardTestsHelpersStartApp, _tolaboardTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _tolaboardTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _tolaboardTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});