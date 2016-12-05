export { initialize };

function initialize(instance) {
  var container = instance.lookup ? instance : instance.container;
  var service = container.lookup('service:head-tags');
  service.get('router').on('didTransition', function () {
    service.collectHeadTags();
  });
}

export default {
  name: 'head-tags',
  initialize: initialize
};