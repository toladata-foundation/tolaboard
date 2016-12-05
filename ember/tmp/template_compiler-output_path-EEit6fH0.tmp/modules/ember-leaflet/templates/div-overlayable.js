export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type"
        ]
      },
      "revision": "Ember@2.5.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 5,
          "column": 0
        }
      },
      "moduleName": "modules/ember-leaflet/templates/div-overlayable.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","yield",[["subexpr","hash",[],["popup",["subexpr","component",["popup-layer"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[2,49],[2,53]]]]],[],[]]],["loc",[null,[2,8],[2,54]]]],"tooltip",["subexpr","component",["tooltip-layer"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[3,53],[3,57]]]]],[],[]]],["loc",[null,[3,10],[3,58]]]]],["loc",[null,[1,8],[4,1]]]]],[],["loc",[null,[1,0],[4,3]]]]
    ],
    locals: [],
    templates: []
  };
}()));