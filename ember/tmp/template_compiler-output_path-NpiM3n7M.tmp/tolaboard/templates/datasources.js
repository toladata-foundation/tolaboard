export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 10,
            "column": 2
          },
          "end": {
            "line": 17,
            "column": 2
          }
        },
        "moduleName": "tolaboard/templates/datasources.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("			");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-md-4");
        var el2 = dom.createTextNode("\n				");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","thumbnail data-internal");
        dom.setAttribute(el2,"href","#");
        var el3 = dom.createTextNode("\n					");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","datasource-item");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n				    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3,"class","datasource-date");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n				");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("			\n			");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
        return morphs;
      },
      statements: [
        ["content","source.label",["loc",[null,[13,34],[13,50]]]],
        ["content","source.id",["loc",[null,[14,35],[14,48]]]]
      ],
      locals: ["source"],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
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
          "line": 73,
          "column": 0
        }
      },
      "moduleName": "tolaboard/templates/datasources.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h3");
      var el3 = dom.createTextNode("Data Sources");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h4");
      var el4 = dom.createTextNode("My Data");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("		");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment(" <div class=\"col-md-4\">\n			<a class=\"thumbnail data-internal\" href=\"#\">\n				<div class=\"datasource-item\">Camp A Survey</div>\n			    <p class=\"datasource-date\">Updated: 5/31/2016</p>\n			</a>			\n		</div>\n		<div class=\"col-md-4\">\n			<a class=\"thumbnail data-internal\" href=\"#\">\n				<div class=\"datasource-item\">Camp B Survey</div>\n			    <p class=\"datasource-date\">Updated: 5/31/2016</p>\n			</a>			\n		</div>\n		<div class=\"col-md-4\">\n			<a class=\"thumbnail data-external\" href=\"#\">\n				<div class=\"datasource-item\">Econonmic Forecast</div>\n			    <p class=\"datasource-date\">Updated: 5/31/2016</p>\n			</a>			\n		</div>");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" \n\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment(" <div class=\"row\">\n		<h4>Shared</h4>\n	</div>\n	<div class=\"row\">\n		<div class=\"col-md-4\">\n			<a class=\"thumbnail data-internal\" href=\"#\">\n				<div class=\"datasource-item\">Izmir Beneficiary Data</div>\n			    <p class=\"datasource-date\">Updated: 5/31/2016</p>\n			</a>\n			\n		</div>\n		<div class=\"col-md-4\">\n			<a class=\"thumbnail data-internal\" href=\"#\">\n				<div class=\"datasource-item\">Refugee Location Database</div>\n			    <p class=\"datasource-date\">Updated: 5/31/2016</p>\n			</a>\n			\n		</div>\n		<div class=\"col-md-4\">\n			<a class=\"thumbnail data-external\" href=\"#\">\n				<div class=\"datasource-item\">IRC Data</div>\n			    <p class=\"datasource-date\">Updated: 5/31/2016</p>\n			</a>\n			\n		</div>\n		<div class=\"col-md-4\">\n			<a class=\"thumbnail data-internal\" href=\"#\">\n				<div class=\"datasource-item\">Aegean Response Database</div>\n			    <p class=\"datasource-date\">Updated: 5/31/2016</p>\n			</a>\n			\n		</div>\n		\n	</div> ");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 3]),1,1);
      return morphs;
    },
    statements: [
      ["block","each",[["get","model",["loc",[null,[10,10],[10,15]]]]],[],0,null,["loc",[null,[10,2],[17,11]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));