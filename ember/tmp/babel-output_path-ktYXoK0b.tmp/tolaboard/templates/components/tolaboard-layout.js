define("tolaboard/templates/components/tolaboard-layout", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 48,
              "column": 5
            },
            "end": {
              "line": 53,
              "column": 5
            }
          },
          "moduleName": "tolaboard/templates/components/tolaboard-layout.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("						");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "graph-builder-widget", [], ["dataSources", ["subexpr", "@mut", [["get", "model.dataSources", ["loc", [null, [50, 19], [50, 36]]]]], [], []], "graphOptions", ["subexpr", "@mut", [["get", "model.graphOptions", ["loc", [null, [51, 20], [51, 38]]]]], [], []], "updateSaveBoardItem", "updateSaveBoardItem"], ["loc", [null, [49, 6], [52, 50]]]]],
        locals: [],
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
            "line": 61,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/components/tolaboard-layout.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "panel panel-default tb-designer-header");
        var el2 = dom.createTextNode("\n	\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-body");
        var el3 = dom.createTextNode("\n    	\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-12");
        var el5 = dom.createTextNode("			\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "tolaboard-save");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "class", "btn btn-default");
        var el7 = dom.createTextNode("Clear");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "class", "btn btn-success");
        var el7 = dom.createTextNode("Save");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "design-window");
        var el6 = dom.createTextNode("\n					\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "class", "btn btn-default");
        var el7 = dom.createTextNode("Add Component");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n					\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "gridster");
        var el7 = dom.createTextNode("\n						");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        var el8 = dom.createComment(" gridster stuff ");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n							");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment(" This is for new tolaboards, or tolaboard_id == 0 ");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n							\n						  		");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment(" {{#each tolaboardItems as |item|}}\n							    	{{tolaboard-item index=item \n							      	  removeItem='removeItem'\n							      	  setActiveItem='setActiveItem'\n									}}\n						  		{{/each}} ");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n					  		\n\n					  		");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment(" This is for existing tolaboards, or tolaboard_id == valid id ");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n					  		");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment(" {{#if tbExist}} -->\n						  		{{#each model.tolaboard.responseJSON.dashboard as |tbItem|}}					\n									{{render-tolaboard-item itemMutable=true tbItemConfig=tbItem}}	\n								{{/each}}\n							<!-- {{/if}} ");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n					");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n					\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" Single instance of this component shared across tolaboard-item components.. triggered by modal which is activated by the edit button (pencil) in the tolaboard-item component template\n\n						 Passed in by tolaboard-designer:\n						 dataSources\n						 graphOptions\n						 itemHome\n\n						 Defined in this component:\n						 saveTolaBoard - passed to builder widget\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n					\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1, 1, 3]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(element0, 7, 7);
        return morphs;
      },
      statements: [["element", "action", ["addItem"], ["on", "click"], ["loc", [null, [14, 37], [14, 68]]]], ["block", "if", [["get", "showGraphBuilder", ["loc", [null, [48, 11], [48, 27]]]]], [], 0, null, ["loc", [null, [48, 5], [53, 12]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});