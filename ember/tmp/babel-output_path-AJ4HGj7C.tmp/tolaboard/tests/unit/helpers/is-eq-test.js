define('tolaboard/tests/unit/helpers/is-eq-test', ['exports', 'tolaboard/helpers/is-eq', 'qunit'], function (exports, _tolaboardHelpersIsEq, _qunit) {

  (0, _qunit.module)('Unit | Helper | is eq');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _tolaboardHelpersIsEq.isEq)([42]);
    assert.ok(result);
  });
});