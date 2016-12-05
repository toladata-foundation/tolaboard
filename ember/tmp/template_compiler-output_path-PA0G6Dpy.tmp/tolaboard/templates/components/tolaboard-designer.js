export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 42
            },
            "end": {
              "line": 20,
              "column": 90
            }
          },
          "moduleName": "tolaboard/templates/components/tolaboard-designer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","board.title",["loc",[null,[20,74],[20,89]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 19,
            "column": 36
          },
          "end": {
            "line": 21,
            "column": 36
          }
        },
        "moduleName": "tolaboard/templates/components/tolaboard-designer.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                                      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
        return morphs;
      },
      statements: [
        ["block","link-to",["dashboards",["get","board",["loc",[null,[20,66],[20,71]]]]],[],0,null,["loc",[null,[20,42],[20,102]]]]
      ],
      locals: ["board"],
      templates: [child0]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 57,
              "column": 28
            },
            "end": {
              "line": 68,
              "column": 28
            }
          },
          "moduleName": "tolaboard/templates/components/tolaboard-designer.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("  \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","render-tolaboard-item",[],["index",["subexpr","@mut",[["get","index",["loc",[null,[58,62],[58,67]]]]],[],[]],"itemMutable",true,"tbItemConfig",["subexpr","@mut",[["get","tbItemConfig",["loc",[null,[59,62],[59,74]]]]],[],[]],"model",["subexpr","@mut",[["get","model",["loc",[null,[60,38],[60,43]]]]],[],[]],"activateGraphBuilder","activateGraphBuilder","setActiveWidget","setActiveWidget","setActiveElement","setActiveElement","setActiveIndex","setActiveIndex","removeTBItem","removeItem","setActiveTBItemConfig","setActiveTBItemConfig"],["loc",[null,[58,32],[67,34]]]]
        ],
        locals: ["tbItemConfig","index"],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 35,
            "column": 8
          },
          "end": {
            "line": 93,
            "column": 8
          }
        },
        "moduleName": "tolaboard/templates/components/tolaboard-designer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","panel panel-default tb-designer-header");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-body");
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","row");
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-md-12");
        var el5 = dom.createTextNode("         \n                        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","tolaboard-save");
        var el6 = dom.createTextNode("\n                            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6,"class","btn btn-default");
        var el7 = dom.createTextNode("Clear");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6,"class","btn btn-success");
        var el7 = dom.createTextNode("Save");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","design-window");
        var el6 = dom.createTextNode("\n                        \n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6,"class","btn btn-default");
        var el7 = dom.createTextNode("Add Component");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        \n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","gridster");
        var el7 = dom.createTextNode("\n                            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        var el8 = dom.createComment(" gridster stuff ");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment(" new approach model can have tolaboard if id passed into route via dynamic model aslo can get defined by creating new tb\n                            with buttons ");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                            \n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment(" render is responsible for displaying an item, and it's also responsible for letting\n                                 tb-designer know which item is 'active' by setting the value, so it can be passed\n                                 to the gbw component below ");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("                            \n                            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                        \n                        \n                                    \n                            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" Single instance of this component shared across tolaboard-item components.. triggered by modal which is activated by the edit button (pencil) in the tolaboard-item component template\n\n                            Passed in by tolaboard-designer:\n                                         dataSources\n                                         graphOptions\n                                         itemHome\n\n                            Defined in this component:\n                            saveTolaBoard - passed to builder widget\n                                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                                    \n                    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                        \n            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1, 1, 1, 1, 3]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5, 1]),6,6);
        return morphs;
      },
      statements: [
        ["element","action",["addItem"],["on","click"],["loc",[null,[46,56],[46,87]]]],
        ["content","model.title",["loc",[null,[48,28],[48,43]]]],
        ["block","each",[["get","model.currBoard.items",["loc",[null,[57,36],[57,57]]]]],[],0,null,["loc",[null,[57,28],[68,37]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
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
          "line": 96,
          "column": 10
        }
      },
      "moduleName": "tolaboard/templates/components/tolaboard-designer.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment(" View to create/define new dashboard ");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","create-view");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","container");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","panel panel-default tb-designer-header");
      var el4 = dom.createTextNode("\n                ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","panel-heading");
      var el5 = dom.createTextNode("\n                    ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","row");
      var el6 = dom.createTextNode("\n                        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","col-md-4");
      var el7 = dom.createTextNode("\n                            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("h3");
      var el8 = dom.createTextNode("TolaBoard Designer");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n\n                        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","col-md-6 col-md-offset-2");
      var el7 = dom.createTextNode("\n                            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","btn-group");
      dom.setAttribute(el7,"role","group");
      var el8 = dom.createTextNode("\n                                ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("div");
      dom.setAttribute(el8,"class","btn-group");
      var el9 = dom.createTextNode("\n                                    ");
      dom.appendChild(el8, el9);
      var el9 = dom.createElement("button");
      dom.setAttribute(el9,"class","btn btn-default dropdown-toggle");
      dom.setAttribute(el9,"type","button");
      dom.setAttribute(el9,"id","dropdownMenu1");
      dom.setAttribute(el9,"data-toggle","dropdown");
      dom.setAttribute(el9,"aria-haspopup","true");
      dom.setAttribute(el9,"aria-expanded","true");
      var el10 = dom.createTextNode("\n                                        Edit TolaBoard\n                                        ");
      dom.appendChild(el9, el10);
      var el10 = dom.createElement("span");
      dom.setAttribute(el10,"class","caret");
      dom.appendChild(el9, el10);
      var el10 = dom.createTextNode("\n                                    ");
      dom.appendChild(el9, el10);
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("\n                                    ");
      dom.appendChild(el8, el9);
      var el9 = dom.createElement("ul");
      dom.setAttribute(el9,"class","dropdown-menu");
      dom.setAttribute(el9,"aria-labelledby","dropdownMenu1");
      var el10 = dom.createTextNode("\n");
      dom.appendChild(el9, el10);
      var el10 = dom.createComment("");
      dom.appendChild(el9, el10);
      var el10 = dom.createTextNode("                                    ");
      dom.appendChild(el9, el10);
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("\n                                ");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                                ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("div");
      dom.setAttribute(el8,"class","btn-group");
      var el9 = dom.createTextNode("\n                                    ");
      dom.appendChild(el8, el9);
      var el9 = dom.createElement("button");
      dom.setAttribute(el9,"class","btn btn-tola-accent");
      var el10 = dom.createTextNode("New TolaBoard");
      dom.appendChild(el9, el10);
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("\n                                    \n                                ");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                                \n                            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createComment(" end first panel ");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    \n            \n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    \n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element2 = dom.childAt(fragment, [2, 1]);
      var element3 = dom.childAt(element2, [1, 1, 1, 3, 1]);
      var element4 = dom.childAt(element3, [3, 1]);
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(dom.childAt(element3, [1, 3]),1,1);
      morphs[1] = dom.createElementMorph(element4);
      morphs[2] = dom.createMorphAt(element2,4,4);
      return morphs;
    },
    statements: [
      ["block","each",[["get","model.boards",["loc",[null,[19,44],[19,56]]]]],[],0,null,["loc",[null,[19,36],[21,45]]]],
      ["element","action",["createNewBoard"],[],["loc",[null,[25,44],[25,71]]]],
      ["block","if",[["get","showGridLayout",["loc",[null,[35,14],[35,28]]]]],[],1,null,["loc",[null,[35,8],[93,15]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));