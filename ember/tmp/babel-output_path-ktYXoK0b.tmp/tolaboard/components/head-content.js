define('tolaboard/components/head-content', ['exports', 'ember', 'tolaboard/templates/head'], function (exports, _ember, _tolaboardTemplatesHead) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    model: _ember['default'].inject.service('head-data'),
    layout: _tolaboardTemplatesHead['default']
  });
});