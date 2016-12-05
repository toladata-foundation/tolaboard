define('tolaboard/instance-initializers/browser/head', ['exports', 'ember', 'tolaboard/config/environment'], function (exports, _ember, _tolaboardConfigEnvironment) {
  exports.initialize = initialize;

  function initialize(instance) {
    if (_tolaboardConfigEnvironment['default']['ember-cli-head'] && _tolaboardConfigEnvironment['default']['ember-cli-head']['suppressBrowserRender']) {
      return true;
    }

    // clear fast booted head (if any)
    _ember['default'].$('meta[name="ember-cli-head-start"]').nextUntil('meta[name="ember-cli-head-end"] ~').addBack().remove();
    var container = instance.lookup ? instance : instance.container;
    // const renderer = container.lookup('renderer:-dom');
    var component = container.lookup('component:head-layout');
    component.appendTo(document.head);
  }

  exports['default'] = {
    name: 'head-browser',
    initialize: initialize
  };
});