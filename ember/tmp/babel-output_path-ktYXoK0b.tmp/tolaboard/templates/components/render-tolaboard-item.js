define("tolaboard/templates/components/render-tolaboard-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
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
          dom.setAttribute(el1, "data-toggle", "modal");
          dom.setAttribute(el1, "class", "btn btn-xs");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "fa fa-edit");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn btn-xs delete-button");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "fa fa-trash");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("		\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3]);
          var element1 = dom.childAt(fragment, [5]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'data-target');
          morphs[1] = dom.createElementMorph(element0);
          morphs[2] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [["attribute", "data-target", ["concat", [["get", "dataTarget", ["loc", [null, [5, 80], [5, 90]]]]]]], ["element", "action", ["activateGraphBuilder"], [], ["loc", [null, [5, 11], [5, 44]]]], ["element", "action", ["deleteWidget"], [], ["loc", [null, [6, 11], [6, 36]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 1
            },
            "end": {
              "line": 14,
              "column": 1
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
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "viz-target");
          var el2 = dom.createTextNode("		\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["inline", "component", [["get", "tbItemConfig.graph.component", ["loc", [null, [12, 14], [12, 42]]]]], ["tbItemConfig", ["subexpr", "@mut", [["get", "tbItemConfig", ["loc", [null, [12, 56], [12, 68]]]]], [], []], "dataSources", ["subexpr", "@mut", [["get", "dataSources", ["loc", [null, [12, 81], [12, 92]]]]], [], []]], ["loc", [null, [12, 2], [12, 94]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
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
        dom.setAttribute(el2, "class", "widget-ui btn-group");
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
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n	    \n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" The nature of this component is a bit odd... didInsertElement event uses gridster api\n     to draw grid, but then nested child component draws graph.  ");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element2, 'data-index');
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(element2, 5, 5);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["attribute", "data-index", ["concat", [["get", "index", ["loc", [null, [1, 18], [1, 23]]]]]]], ["block", "if", [["get", "itemMutable", ["loc", [null, [3, 8], [3, 19]]]]], [], 0, null, ["loc", [null, [3, 2], [7, 9]]]], ["block", "if", [["get", "toggleRender", ["loc", [null, [10, 7], [10, 19]]]]], [], 1, null, ["loc", [null, [10, 1], [14, 8]]]], ["inline", "graph-builder-widget", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [19, 13], [19, 18]]]]], [], []], "index", ["subexpr", "@mut", [["get", "index", ["loc", [null, [20, 13], [20, 18]]]]], [], []], "tbItemConfig", ["subexpr", "@mut", [["get", "tbItemConfig", ["loc", [null, [21, 20], [21, 32]]]]], [], []], "updateSaveBoardItem", "updateSaveBoardItem"], ["loc", [null, [18, 0], [22, 50]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});