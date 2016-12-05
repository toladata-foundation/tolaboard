define('tolaboard/helpers/is-eq', ['exports', 'ember'], function (exports, _ember) {
  exports.isEq = isEq;

  function isEq(params /*, hash*/) {
    return params[0] === params[1];
  }

  exports['default'] = _ember['default'].Helper.helper(isEq);
});