export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type",
          "multiple-nodes"
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
          "line": 14,
          "column": 34
        }
      },
      "moduleName": "tolaboard/templates/dashboards.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment(" Basic structure\n	component: tolaboard-designer\n		model: datasources - needed by graph-builder-widget\n			   graphOptions - needed by graph-builder-widget\n			   dashboard - used to get array of items for render-tolaboard-item component\n\n		children: \n			component: render-tolaboard-item\n			model usage: model.dashboards\n\n			children:\n				component: graph-builder-widget (needs datasource, graphoptions and, if exists, tb item config)\n  ");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["inline","tolaboard-designer",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[14,27],[14,32]]]]],[],[]]],["loc",[null,[14,0],[14,34]]]]
    ],
    locals: [],
    templates: []
  };
}()));