import Ember from 'ember';

var assert = Ember.assert;
var get = Ember.get;
var _strictInvokeAction = function _strictInvokeAction(object, actionName) {
  assert('invoke action must be passed a string as actionName, got ' + actionName, typeof actionName === 'string');

  var action = get(object, actionName);

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (typeof action === 'string') {
    object.sendAction.apply(object, [actionName].concat(args));
  } else if (typeof action === 'function') {
    return action.apply(undefined, args);
  } else {
    assert('No invokable action ' + actionName + ' was found', false);
  }
};

export { _strictInvokeAction as strictInvokeAction };
var _invokeAction = function _invokeAction() {
  try {
    return _strictInvokeAction.apply(undefined, arguments);
  } catch (e) {
    if (!e.message.match(/^Assertion Failed: No invokable action .+ was found$/)) {
      throw e;
    }
  }
};

export { _invokeAction as invokeAction };
var InvokeActionMixin = Ember.Mixin.create({
  invokeAction: function invokeAction(actionName) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return _invokeAction.apply(undefined, [this, actionName].concat(args));
  },

  strictInvokeAction: function strictInvokeAction(actionName) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return _strictInvokeAction.apply(undefined, [this, actionName].concat(args));
  }
});

export { InvokeActionMixin };
export default _invokeAction;