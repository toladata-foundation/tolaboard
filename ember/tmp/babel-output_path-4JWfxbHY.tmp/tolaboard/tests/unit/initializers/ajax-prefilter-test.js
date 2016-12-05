define('tolaboard/tests/unit/initializers/ajax-prefilter-test', ['exports', 'ember', 'tolaboard/initializers/ajax-prefilter', 'qunit'], function (exports, _ember, _tolaboardInitializersAjaxPrefilter, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | ajax prefilter', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _tolaboardInitializersAjaxPrefilter['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});