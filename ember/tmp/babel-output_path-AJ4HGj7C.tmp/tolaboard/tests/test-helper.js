define('tolaboard/tests/test-helper', ['exports', 'tolaboard/tests/helpers/resolver', 'ember-qunit'], function (exports, _tolaboardTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_tolaboardTestsHelpersResolver['default']);
});