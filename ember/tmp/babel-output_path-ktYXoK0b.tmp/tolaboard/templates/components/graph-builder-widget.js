define("tolaboard/templates/components/graph-builder-widget", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 4
            },
            "end": {
              "line": 21,
              "column": 4
            }
          },
          "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element13 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element13, 'value');
          morphs[1] = dom.createMorphAt(element13, 0, 0);
          return morphs;
        },
        statements: [["attribute", "value", ["get", "source.id", ["loc", [null, [20, 21], [20, 30]]]]], ["content", "source.label", ["loc", [null, [20, 33], [20, 49]]]]],
        locals: ["source"],
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
              "line": 26,
              "column": 3
            },
            "end": {
              "line": 31,
              "column": 3
            }
          },
          "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row data-preview animated fadeIn");
          dom.setAttribute(el1, "style", "width: 80%; height:150px;overflow:auto; border: 1px solid #ccc;");
          var el2 = dom.createTextNode("	\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["inline", "partial", [["get", "templates/partials/spinner", ["loc", [null, [27, 13], [27, 39]]]]], [], ["loc", [null, [27, 3], [27, 41]]]], ["inline", "json-2-table", [], ["displayData", ["subexpr", "@mut", [["get", "scopeData", ["loc", [null, [29, 31], [29, 40]]]]], [], []], "showVizSelection", ["subexpr", "@mut", [["get", "showVizSelection", ["loc", [null, [29, 58], [29, 74]]]]], [], []]], ["loc", [null, [29, 4], [29, 76]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 46,
                "column": 4
              },
              "end": {
                "line": 54,
                "column": 4
              }
            },
            "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-3 col-md-3 col-lg-2");
            var el2 = dom.createTextNode("\n				  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "class", "thumbnail viz-selection");
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("img");
            dom.setAttribute(el3, "class", "img-responsive");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("hr");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("h5");
            var el4 = dom.createElement("strong");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n				  ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element11 = dom.childAt(fragment, [1, 1]);
            var element12 = dom.childAt(element11, [1]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element12, 'data-graph');
            morphs[1] = dom.createAttrMorph(element12, 'src');
            morphs[2] = dom.createElementMorph(element12);
            morphs[3] = dom.createMorphAt(dom.childAt(element11, [5, 0]), 0, 0);
            return morphs;
          },
          statements: [["attribute", "data-graph", ["get", "graph.id", ["loc", [null, [49, 23], [49, 31]]]]], ["attribute", "src", ["concat", [["get", "graph.img", ["loc", [null, [49, 41], [49, 50]]]]]]], ["element", "action", ["showGraphDataModel", ["get", "graph", ["loc", [null, [49, 107], [49, 112]]]]], ["on", "click"], ["loc", [null, [49, 77], [49, 125]]]], ["content", "graph.label", ["loc", [null, [51, 17], [51, 32]]]]],
          locals: ["graph"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 36,
              "column": 3
            },
            "end": {
              "line": 56,
              "column": 3
            }
          },
          "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-md-12");
          var el3 = dom.createTextNode("\n			  		");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "style", "margin-top: 20px;");
          var el4 = dom.createTextNode("\n						");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h4");
          var el5 = dom.createTextNode("Select a Visualization Type");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n					");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row graph-library animated fadeIn");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("			\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "graphOptions", ["loc", [null, [46, 12], [46, 24]]]]], [], 0, null, ["loc", [null, [46, 4], [54, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 70,
                  "column": 8
                },
                "end": {
                  "line": 72,
                  "column": 8
                }
              },
              "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
            },
            isEmpty: false,
            arity: 2,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("									");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("option");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element8 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element8, 'value');
              morphs[1] = dom.createMorphAt(element8, 0, 0);
              return morphs;
            },
            statements: [["attribute", "value", ["get", "colName", ["loc", [null, [71, 25], [71, 32]]]]], ["content", "colName", ["loc", [null, [71, 35], [71, 46]]]]],
            locals: ["colName", "index"],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 65,
                "column": 4
              },
              "end": {
                "line": 75,
                "column": 4
              }
            },
            "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("					");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "data-model-input");
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h5");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(":");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("select");
            dom.setAttribute(el2, "class", "form-control");
            var el3 = dom.createTextNode("\n									");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("option");
            dom.setAttribute(el3, "value", "");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("							");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element9 = dom.childAt(fragment, [1]);
            var element10 = dom.childAt(element9, [3]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(dom.childAt(element9, [1]), 0, 0);
            morphs[1] = dom.createAttrMorph(element10, 'name');
            morphs[2] = dom.createAttrMorph(element10, 'onchange');
            morphs[3] = dom.createMorphAt(element10, 3, 3);
            return morphs;
          },
          statements: [["content", "fieldInput.label", ["loc", [null, [67, 10], [67, 30]]]], ["attribute", "name", ["get", "fieldInput.name", ["loc", [null, [68, 22], [68, 37]]]]], ["attribute", "onchange", ["subexpr", "action", ["tryGraphRender"], ["value", "target.value"], ["loc", [null, [68, 49], [68, 98]]]]], ["block", "each-in", [["get", "scopeData.0", ["loc", [null, [70, 19], [70, 32]]]]], [], 0, null, ["loc", [null, [70, 8], [72, 20]]]]],
          locals: ["fieldInput"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 60,
              "column": 3
            },
            "end": {
              "line": 80,
              "column": 3
            }
          },
          "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row animated fadeIn");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          dom.setAttribute(el2, "style", "margin-top: 20px;");
          var el3 = dom.createTextNode("Specify a data field for each required input");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				\n				\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("				\n				\n				\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 3, 3);
          return morphs;
        },
        statements: [["block", "each", [["get", "scopeDataModel", ["loc", [null, [65, 12], [65, 26]]]]], [], 0, null, ["loc", [null, [65, 4], [75, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 83,
              "column": 3
            },
            "end": {
              "line": 90,
              "column": 3
            }
          },
          "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h6");
          var el2 = dom.createTextNode("renderGraph area");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-md-8 gbw-graph");
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n				");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3, 1]), 1, 1);
          return morphs;
        },
        statements: [["inline", "component", [["get", "scopeComponent", ["loc", [null, [87, 16], [87, 30]]]]], ["dataSourceUrl", ["subexpr", "@mut", [["get", "dataSourceUrl", ["loc", [null, [87, 45], [87, 58]]]]], [], []], "tbItemConfig", ["subexpr", "@mut", [["get", "tbItemConfigTemp", ["loc", [null, [87, 72], [87, 88]]]]], [], []]], ["loc", [null, [87, 4], [87, 90]]]]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 107,
                  "column": 6
                },
                "end": {
                  "line": 109,
                  "column": 6
                }
              },
              "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
            },
            isEmpty: false,
            arity: 2,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("							");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("option");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element0, 'value');
              morphs[1] = dom.createMorphAt(element0, 0, 0);
              return morphs;
            },
            statements: [["attribute", "value", ["get", "colName", ["loc", [null, [108, 23], [108, 30]]]]], ["content", "colName", ["loc", [null, [108, 33], [108, 44]]]]],
            locals: ["colName", "index"],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 103,
                "column": 4
              },
              "end": {
                "line": 126,
                "column": 5
              }
            },
            "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "row animated fadeIn");
            var el2 = dom.createTextNode("\n				  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "data-filters-row");
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("select");
            dom.setAttribute(el3, "name", "ds-name");
            dom.setAttribute(el3, "class", "form-control data-filters-field");
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("					");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("select");
            dom.setAttribute(el3, "class", "form-control data-filters-eval");
            var el4 = dom.createTextNode("\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode("=");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode("!=");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode("<");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode(">");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("							\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode("<=");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode(">=");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode("in");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n						");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("option");
            var el5 = dom.createTextNode("not in");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n					");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("input");
            dom.setAttribute(el3, "class", "form-control data-filters-value");
            dom.setAttribute(el3, "type", "text");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "class", "btn btn-success data-filters-delete");
            var el4 = dom.createTextNode("Apply");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            dom.setAttribute(el3, "class", "btn btn-default data-filters-delete");
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "fa fa-times");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					  ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1, 1]);
            var element2 = dom.childAt(element1, [1]);
            var element3 = dom.childAt(element1, [3]);
            var element4 = dom.childAt(element1, [5]);
            var element5 = dom.childAt(element1, [7]);
            var element6 = dom.childAt(element1, [9]);
            var morphs = new Array(6);
            morphs[0] = dom.createAttrMorph(element2, 'onchange');
            morphs[1] = dom.createMorphAt(element2, 1, 1);
            morphs[2] = dom.createAttrMorph(element3, 'onchange');
            morphs[3] = dom.createAttrMorph(element4, 'onchange');
            morphs[4] = dom.createElementMorph(element5);
            morphs[5] = dom.createElementMorph(element6);
            return morphs;
          },
          statements: [["attribute", "onchange", ["subexpr", "action", ["updateFilter"], ["value", "target.value"], ["loc", [null, [106, 37], [106, 83]]]]], ["block", "each-in", [["get", "scopeData.0", ["loc", [null, [107, 17], [107, 30]]]]], [], 0, null, ["loc", [null, [107, 6], [109, 18]]]], ["attribute", "onchange", ["subexpr", "action", ["updateFilter"], [], ["loc", [null, [111, 22], [111, 47]]]]], ["attribute", "onchange", ["subexpr", "action", ["updateFilter"], [], ["loc", [null, [121, 21], [121, 46]]]]], ["element", "action", ["applyFilter"], [], ["loc", [null, [122, 13], [122, 37]]]], ["element", "action", ["deleteFilter", ["get", "filter.id", ["loc", [null, [123, 37], [123, 46]]]]], [], ["loc", [null, [123, 13], [123, 48]]]]],
          locals: ["filter"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 93,
              "column": 3
            },
            "end": {
              "line": 128,
              "column": 3
            }
          },
          "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("				");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n					");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-md-12");
          var el3 = dom.createTextNode("\n				  		");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "style", "margin-top: 20px;");
          var el4 = dom.createTextNode("\n							");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h4");
          dom.setAttribute(el4, "style", "float:left;");
          var el5 = dom.createTextNode("Add Filters (Optional)");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n							");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("button");
          dom.setAttribute(el4, "style", "margin-top:0;");
          dom.setAttribute(el4, "class", "btn btn-default");
          var el5 = dom.createTextNode("Add Filter");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n						");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n					");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("				\n				");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "data-filters");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("				");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("	\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element7 = dom.childAt(fragment, [1, 1, 1, 3]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element7);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["element", "action", ["addFilter"], [], ["loc", [null, [98, 61], [98, 83]]]], ["block", "each", [["get", "filters", ["loc", [null, [103, 12], [103, 19]]]]], [], 0, null, ["loc", [null, [103, 4], [126, 14]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 142,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/components/graph-builder-widget.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" Modal ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <div class=\"container\"> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "modal fade");
        dom.setAttribute(el1, "tabindex", "-1");
        dom.setAttribute(el1, "role", "dialog");
        dom.setAttribute(el1, "aria-labelledby", "myModalLabel");
        dom.setAttribute(el1, "aria-hidden", "true");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-dialog builder-widget");
        dom.setAttribute(el2, "role", "document");
        var el3 = dom.createTextNode("\n	    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "modal-content");
        var el4 = dom.createTextNode("\n	      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-header");
        var el5 = dom.createTextNode("\n	        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "close");
        dom.setAttribute(el5, "data-dismiss", "modal");
        dom.setAttribute(el5, "aria-label", "Close");
        var el6 = dom.createTextNode("\n	          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "aria-hidden", "true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        dom.setAttribute(el5, "class", "modal-title");
        dom.setAttribute(el5, "id", "myModalLabel");
        var el6 = dom.createTextNode("Graph Builder");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-body");
        var el5 = dom.createTextNode("\n	      	");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "container-fluid");
        var el6 = dom.createTextNode("\n\n	        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "row dropdown");
        var el7 = dom.createTextNode("\n	        	");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h4");
        var el8 = dom.createTextNode("Select a Data Source");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n				");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("select");
        dom.setAttribute(el7, "id", "data-source-select");
        dom.setAttribute(el7, "name", "ds-name");
        dom.setAttribute(el7, "class", "form-control");
        var el8 = dom.createTextNode("\n					");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("option");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("				");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("					  \n			");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n			");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" Uses json-2-table component to table-ize data ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n			\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				\n			\n\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("			\n\n			");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" Show this area when a viz type is selected ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n			");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" Moment of truth... graph time!! ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n			");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" Begin data filter section ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("			");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" end data filter section ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("				\n			\n			\n	      ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" model body container ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-footer");
        var el5 = dom.createTextNode("\n	        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "btn btn-secondary");
        dom.setAttribute(el5, "data-dismiss", "modal");
        var el6 = dom.createTextNode("Close");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "btn btn-tola-accent");
        var el6 = dom.createTextNode("Save changes");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" </div> ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element14 = dom.childAt(fragment, [4]);
        var element15 = dom.childAt(element14, [1, 1]);
        var element16 = dom.childAt(element15, [3, 1]);
        var element17 = dom.childAt(element16, [1, 3]);
        var element18 = dom.childAt(element15, [7]);
        var element19 = dom.childAt(element18, [1]);
        var element20 = dom.childAt(element18, [3]);
        var morphs = new Array(11);
        morphs[0] = dom.createAttrMorph(element14, 'id');
        morphs[1] = dom.createAttrMorph(element17, 'onchange');
        morphs[2] = dom.createMorphAt(element17, 3, 3);
        morphs[3] = dom.createMorphAt(element16, 5, 5);
        morphs[4] = dom.createMorphAt(element16, 7, 7);
        morphs[5] = dom.createMorphAt(element16, 11, 11);
        morphs[6] = dom.createMorphAt(element16, 15, 15);
        morphs[7] = dom.createMorphAt(element16, 19, 19);
        morphs[8] = dom.createElementMorph(element19);
        morphs[9] = dom.createAttrMorph(element20, 'disabled');
        morphs[10] = dom.createElementMorph(element20);
        return morphs;
      },
      statements: [["attribute", "id", ["concat", [["get", "dataTarget", ["loc", [null, [3, 30], [3, 40]]]]]]], ["attribute", "onchange", ["subexpr", "action", ["getData"], ["value", "target.value"], ["loc", [null, [17, 60], [17, 102]]]]], ["block", "each", [["get", "model.datasources", ["loc", [null, [19, 12], [19, 29]]]]], [], 0, null, ["loc", [null, [19, 4], [21, 13]]]], ["block", "if", [["get", "showDataSourcePreview", ["loc", [null, [26, 9], [26, 30]]]]], [], 1, null, ["loc", [null, [26, 3], [31, 10]]]], ["block", "if", [["get", "showVizSelection", ["loc", [null, [36, 9], [36, 25]]]]], [], 2, null, ["loc", [null, [36, 3], [56, 10]]]], ["block", "if", [["get", "showDataModel", ["loc", [null, [60, 9], [60, 22]]]]], [], 3, null, ["loc", [null, [60, 3], [80, 10]]]], ["block", "if", [["get", "renderGraph", ["loc", [null, [83, 9], [83, 20]]]]], [], 4, null, ["loc", [null, [83, 3], [90, 10]]]], ["block", "if", [["get", "showDataFilters", ["loc", [null, [93, 9], [93, 24]]]]], [], 5, null, ["loc", [null, [93, 3], [128, 10]]]], ["element", "action", ["closeGBW"], [], ["loc", [null, [135, 78], [135, 99]]]], ["attribute", "disabled", ["get", "disableSave", ["loc", [null, [136, 28], [136, 39]]]]], ["element", "action", ["saveBoardItem"], [], ["loc", [null, [136, 42], [136, 68]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});