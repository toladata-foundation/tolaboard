import Ember from 'ember';

//TODO: consider polyfilled Set
var VALID_HEAD_TAGS = Ember.A(['base', 'link', 'meta', 'script', 'noscript', 'title']);

var assign = Ember.assign ? Ember.assign : Ember.merge;

var keys = Object.keys || Ember.keys;

export default Ember.Service.extend({
  headData: Ember.inject.service(),

  // crawl up the active route stack and collect head tags
  collectHeadTags: function collectHeadTags() {
    var _this = this;

    var tags = {};
    var handlerInfos = Ember.A(this.get('router.router.currentHandlerInfos'));
    handlerInfos.forEach(function (handlerInfo) {
      assign(tags, _this._extractHeadTagsFromRoute(handlerInfo.handler));
    });
    var tagArray = Ember.A(keys(tags)).map(function (id) {
      return tags[id];
    });
    this.set('headData.headTags', Ember.A(tagArray));
  },

  _extractHeadTagsFromRoute: function _extractHeadTagsFromRoute(route) {
    var headTags = route.headTags;
    if (!headTags) {
      return {};
    }
    if (typeof headTags === 'function') {
      headTags = headTags.apply(route);
    } else if (typeof headTags !== 'object') {
      // not recognized construct
      return {};
    }
    // convert headTags to object
    return this._buildTags(headTags);
  },

  // ensure all tags have a tagId and build object keyed by id
  _buildTags: function _buildTags(headTagsArray) {
    var tagMap = {};
    Ember.A(headTagsArray).forEach(function (tagDefinition) {
      if (!VALID_HEAD_TAGS.contains(tagDefinition.type)) {
        return;
      }
      var tagId = tagDefinition.tagId;
      if (!tagId) {
        tagId = Ember.guidFor(tagDefinition);
      }
      tagMap[tagId] = tagDefinition;
    });
    return tagMap;
  }
});