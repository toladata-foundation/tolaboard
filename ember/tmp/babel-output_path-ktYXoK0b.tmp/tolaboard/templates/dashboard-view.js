define("tolaboard/templates/dashboard-view", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 6
            },
            "end": {
              "line": 20,
              "column": 6
            }
          },
          "moduleName": "tolaboard/templates/dashboard-view.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("	\n							\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "render-tolaboard-item", [], ["index", ["subexpr", "@mut", [["get", "index", ["loc", [null, [18, 37], [18, 42]]]]], [], []], "itemMutable", false, "tbItemConfig", ["subexpr", "@mut", [["get", "tbItem", ["loc", [null, [18, 74], [18, 80]]]]], [], []], "model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [18, 87], [18, 92]]]]], [], []]], ["loc", [null, [18, 7], [18, 94]]]]],
        locals: ["tbItem", "index"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 10
          }
        },
        "moduleName": "tolaboard/templates/dashboard-view.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "id", "current-dashboard");
        var el2 = dom.createTextNode("	\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-12");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" The dashboard route contains a dynamic segment that represents an id to obtain a partiuclar persisted tolaboard. The dashboard property on the tolaboard data contains an array of objects. Each object has a gridster component and a graph component\n\n				The model is a single tolaboard, and we will use model.board in a \"for each\" block to render each tolaboard item in the dashboard... using render-tolaboard-item component				\n\n				It's kinda odd that we have the gridster ul dom elements here, but we need that wrapper. Ideally, components live on their own, and are independent of the outside, but here, the .gridster ul selector is needed for the gridster api used in the render component..hmm\n\n				How could it be different... like self-contained? Perhaps a render-tolaboard component which calls render-tolaboard-item component? This just encapsulates the problem... just making note of it for now.\n\n			");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "gridster");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("				\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [5, 1]), 1, 1);
        return morphs;
      },
      statements: [["content", "model.title", ["loc", [null, [14, 8], [14, 23]]]], ["block", "each", [["get", "model.items", ["loc", [null, [17, 14], [17, 25]]]]], [], 0, null, ["loc", [null, [17, 6], [20, 15]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});