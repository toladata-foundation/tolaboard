export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": false,
      "revision": "Ember@2.5.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 7,
          "column": 5
        }
      },
      "moduleName": "tolaboard/templates/components/tolaboard-item.hbs"
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
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"data-toggle","modal");
      dom.setAttribute(el3,"data-target","#myModal");
      dom.setAttribute(el3,"class","btn btn-xs");
      var el4 = dom.createElement("span");
      dom.setAttribute(el4,"class","fa fa-edit");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"class","btn btn-xs delete-button");
      var el4 = dom.createElement("span");
      dom.setAttribute(el4,"class","fa fa-trash");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("		\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","viz-target");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0, 1]);
      var element1 = dom.childAt(element0, [1]);
      var element2 = dom.childAt(element0, [3]);
      var morphs = new Array(2);
      morphs[0] = dom.createElementMorph(element1);
      morphs[1] = dom.createElementMorph(element2);
      return morphs;
    },
    statements: [
      ["element","action",["runGraphBuilderWidget"],[],["loc",[null,[3,10],[3,44]]]],
      ["element","action",["deleteWidget"],[],["loc",[null,[4,10],[4,35]]]]
    ],
    locals: [],
    templates: []
  };
}()));