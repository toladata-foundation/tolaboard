export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 3,
            "column": 2
          },
          "end": {
            "line": 7,
            "column": 2
          }
        },
        "moduleName": "tolaboard/templates/components/render-tolaboard-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("			");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" The graph-builder-widget component would need to be in either this template, or the parent component of this component in order to fire. The render-tolaboard-item component is intended to be used in all cases of rendering a tolaboard item, so only the designer component needs the graph-builder-widget template ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n			");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"data-toggle","modal");
        dom.setAttribute(el1,"data-target","#myModal");
        dom.setAttribute(el1,"class","btn btn-xs");
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"class","fa fa-edit");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n			");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","btn btn-xs delete-button");
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"class","fa fa-trash");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("		\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [3]);
        var element1 = dom.childAt(fragment, [5]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [
        ["element","action",["activateGraphBuilder"],[],["loc",[null,[5,11],[5,44]]]],
        ["element","action",["deleteWidget"],[],["loc",[null,[6,11],[6,36]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 15,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/components/render-tolaboard-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","graph-builder-widget",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[17,12],[17,17]]]]],[],[]],"tbItemConfig",["subexpr","@mut",[["get","tbItemConfig",["loc",[null,[18,19],[18,31]]]]],[],[]],"activeIndex",["subexpr","@mut",[["get","activeIndex",["loc",[null,[19,18],[19,29]]]]],[],[]],"activeWidget",["subexpr","@mut",[["get","activeWidget",["loc",[null,[20,48],[20,60]]]]],[],[]],"activeElement",["subexpr","@mut",[["get","activeElement",["loc",[null,[21,49],[21,62]]]]],[],[]],"dataSources",["subexpr","@mut",[["get","model.datasources",["loc",[null,[22,47],[22,64]]]]],[],[]],"graphOptions",["subexpr","@mut",[["get","model.graphOptions",["loc",[null,[23,48],[23,66]]]]],[],[]],"updateSaveBoardItem","updateSaveBoardItem"],["loc",[null,[16,4],[24,78]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes",
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
          "line": 28,
          "column": 68
        }
      },
      "moduleName": "tolaboard/templates/components/render-tolaboard-item.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("li");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","widget-ui btn-group");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment(" scopeGraph gets determined in tbItemConfig and defined once this Ember view is inserted ");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","viz-target");
      var el3 = dom.createTextNode("		\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment(" The nature of this component is a bit odd... didInsertElement event uses gridster api\n     to draw grid, but then nested child component draws graph.  ");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element2 = dom.childAt(fragment, [0]);
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]),1,1);
      morphs[1] = dom.createMorphAt(dom.childAt(element2, [5]),1,1);
      morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
      return morphs;
    },
    statements: [
      ["block","if",[["get","itemMutable",["loc",[null,[3,8],[3,19]]]]],[],0,null,["loc",[null,[3,2],[7,9]]]],
      ["inline","component",[["get","tbItemConfig.graph.component",["loc",[null,[11,14],[11,42]]]]],["tbItemConfig",["subexpr","@mut",[["get","tbItemConfig",["loc",[null,[11,56],[11,68]]]]],[],[]],"dataSources",["subexpr","@mut",[["get","dataSources",["loc",[null,[11,81],[11,92]]]]],[],[]]],["loc",[null,[11,2],[11,94]]]],
      ["block","if",[["get","showGraphBuilder",["loc",[null,[15,6],[15,22]]]]],[],1,null,["loc",[null,[15,0],[25,7]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));