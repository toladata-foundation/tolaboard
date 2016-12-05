define('tolaboard/tests/unit/routes/designer/:tolaboard-id-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:designer/:tolaboard-id', 'Unit | Route | designer/:tolaboard id', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});