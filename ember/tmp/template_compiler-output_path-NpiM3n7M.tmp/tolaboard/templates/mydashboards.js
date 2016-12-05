export default Ember.HTMLBars.template((function() {
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
          "line": 70,
          "column": 10
        }
      },
      "moduleName": "tolaboard/templates/mydashboards.hbs"
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
      var el2 = dom.createElement("h2");
      var el3 = dom.createTextNode("Weekly Snapshot Dashboard");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment(" {{tolaboard-grid}} ");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("style");
      dom.setAttribute(el1,"type","text/css");
      var el2 = dom.createTextNode("\n	/* Done for demo - get rid of this */\n	h2 {\n		margin-top: 40px;\n		margin-bottom: 20px;\n	}\n	.demo-graph {\n		border:	1px solid #ddd;\n		margin: 4px 4px;\n		background-color: #FAFAFA;\n		border-radius: 2px;\n		box-shadow: 1px 2.5px 5px #ddd;\n	}\n	.dial {\n		height: 150px;\n	}\n	.map {\n		height: 300px;\n	}\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("section");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","container-fluid");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n			\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","verbage");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("h4");
      var el7 = dom.createTextNode("Lorem Ipsum");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("p");
      var el7 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2");
      var el5 = dom.createTextNode("				\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","demo-graph dial");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("img");
      dom.setAttribute(el6,"class","img-responsive");
      dom.setAttribute(el6,"src","assets/images/graph-library/demo-pie.png");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("				\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","demo-graph dial");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("img");
      dom.setAttribute(el6,"class","img-responsive");
      dom.setAttribute(el6,"src","assets/images/graph-library/modern-dial.png");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("				\n				\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-6");
      var el5 = dom.createTextNode("		\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","demo-graph");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("img");
      dom.setAttribute(el6,"class","img-responsive  map");
      dom.setAttribute(el6,"src","assets/images/graph-library/map2.png");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("	\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4 chart");
      var el5 = dom.createTextNode("\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","demo-graph");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("img");
      dom.setAttribute(el6,"class","img-responsive");
      dom.setAttribute(el6,"src","assets/images/graph-library/bar1.png");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n					\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","demo-graph");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("img");
      dom.setAttribute(el6,"class","img-responsive");
      dom.setAttribute(el6,"src","assets/images/graph-library/bar2.png");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("				\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","demo-graph");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("img");
      dom.setAttribute(el6,"class","img-responsive");
      dom.setAttribute(el6,"src","assets/images/graph-library/bar1.png");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n			");
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
    buildRenderNodes: function buildRenderNodes() { return []; },
    statements: [

    ],
    locals: [],
    templates: []
  };
}()));