export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
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
          "line": 19,
          "column": 4
        }
      },
      "moduleName": "modules/ember-leaflet/templates/leaflet-map.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","yield",[["subexpr","hash",[],["tile",["subexpr","component",["tile-layer"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[2,49],[2,53]]]]],[],[]]],["loc",[null,[2,9],[2,54]]]],"wms-tile",["subexpr","component",["wms-tile-layer"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[3,57],[3,61]]]]],[],[]]],["loc",[null,[3,13],[3,62]]]],"marker",["subexpr","component",["marker-layer"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[4,53],[4,57]]]]],[],[]]],["loc",[null,[4,11],[4,58]]]],"circle",["subexpr","component",["circle-layer"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[5,53],[5,57]]]]],[],[]]],["loc",[null,[5,11],[5,58]]]],"circle-marker",["subexpr","component",["circle-marker-layer"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[6,67],[6,71]]]]],[],[]]],["loc",[null,[6,18],[6,72]]]],"image",["subexpr","component",["image-layer"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[7,51],[7,55]]]]],[],[]]],["loc",[null,[7,10],[7,56]]]],"polyline",["subexpr","component",["polyline-layer"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[8,57],[8,61]]]]],[],[]]],["loc",[null,[8,13],[8,62]]]],"polygon",["subexpr","component",["polygon-layer"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[9,55],[9,59]]]]],[],[]]],["loc",[null,[9,12],[9,60]]]],"geojson",["subexpr","component",["geojson-layer"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[10,55],[10,59]]]]],[],[]]],["loc",[null,[10,12],[10,60]]]],"wmsTile",["subexpr","component",["wms-tile-layer"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[12,56],[12,60]]]]],[],[]]],["loc",[null,[12,12],[12,61]]]],"geoJSON",["subexpr","component",["geojson-layer"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[13,55],[13,59]]]]],[],[]]],["loc",[null,[13,12],[13,60]]]]],["loc",[null,[1,8],[14,3]]]]],[],["loc",[null,[1,0],[14,5]]]]
    ],
    locals: [],
    templates: []
  };
}()));