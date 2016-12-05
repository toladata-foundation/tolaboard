define("tolaboard/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 10
            },
            "end": {
              "line": 12,
              "column": 10
            }
          },
          "moduleName": "tolaboard/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "tola-brand");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-line-chart");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" TolaBoard");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 26,
                  "column": 22
                },
                "end": {
                  "line": 26,
                  "column": 74
                }
              },
              "moduleName": "tolaboard/templates/application.hbs"
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
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "board.title", ["loc", [null, [26, 58], [26, 73]]]]],
            locals: [],
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
                "line": 25,
                "column": 16
              },
              "end": {
                "line": 27,
                "column": 16
              }
            },
            "moduleName": "tolaboard/templates/application.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                  ");
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
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["block", "link-to", ["dashboard-view", ["get", "board", ["loc", [null, [26, 50], [26, 55]]]]], [], 0, null, ["loc", [null, [26, 22], [26, 86]]]]],
          locals: ["board"],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 43,
                  "column": 22
                },
                "end": {
                  "line": 43,
                  "column": 74
                }
              },
              "moduleName": "tolaboard/templates/application.hbs"
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
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "board.title", ["loc", [null, [43, 58], [43, 73]]]]],
            locals: [],
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
                "line": 42,
                "column": 16
              },
              "end": {
                "line": 44,
                "column": 16
              }
            },
            "moduleName": "tolaboard/templates/application.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                  ");
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
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["block", "link-to", ["dashboard-view", ["get", "board", ["loc", [null, [43, 50], [43, 55]]]]], [], 0, null, ["loc", [null, [43, 22], [43, 86]]]]],
          locals: ["board"],
          templates: [child0]
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 49,
                "column": 16
              },
              "end": {
                "line": 49,
                "column": 55
              }
            },
            "moduleName": "tolaboard/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Designer");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 50,
                "column": 16
              },
              "end": {
                "line": 50,
                "column": 54
              }
            },
            "moduleName": "tolaboard/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Data Sources");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
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
              "line": 15,
              "column": 8
            },
            "end": {
              "line": 75,
              "column": 8
            }
          },
          "moduleName": "tolaboard/templates/application.hbs"
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
          dom.setAttribute(el1, "id", "navbar");
          dom.setAttribute(el1, "class", "collapse navbar-collapse");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          dom.setAttribute(el2, "class", "nav navbar-nav");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          dom.setAttribute(el3, "class", "dropdown");
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "#");
          dom.setAttribute(el4, "class", "dropdown-toggle");
          dom.setAttribute(el4, "data-toggle", "dropdown");
          dom.setAttribute(el4, "role", "button");
          dom.setAttribute(el4, "aria-haspopup", "true");
          dom.setAttribute(el4, "aria-expanded", "false");
          var el5 = dom.createTextNode("My Dashboards ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.setAttribute(el5, "class", "caret");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("ul");
          dom.setAttribute(el4, "class", "dropdown-menu");
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment(" <li><a href=\"/mydashboards\">Weekly Snapshot</a></li>\n                <li><a href=\"/dashboards/1\">Beneficiary Info</a></li>\n                <li><a href=\"/dashboards/2\">Refugee Flow</a></li>\n                <li><a href=\"/dashboards/3\">Program Analytics and Insights</a></li> ");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                \n                \n              ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" <li><a href=\"/sharedboards\">Shared Dashboards</a></li>\n              <li><a href=\"/designer\">Designer</a></li>\n          <li><a href=\"/datasources\">Data Sources</a></li>       ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          dom.setAttribute(el3, "class", "dropdown");
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "#");
          dom.setAttribute(el4, "class", "dropdown-toggle");
          dom.setAttribute(el4, "data-toggle", "dropdown");
          dom.setAttribute(el4, "role", "button");
          dom.setAttribute(el4, "aria-haspopup", "true");
          dom.setAttribute(el4, "aria-expanded", "false");
          var el5 = dom.createTextNode("Shared Dashboards ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.setAttribute(el5, "class", "caret");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("ul");
          dom.setAttribute(el4, "class", "dropdown-menu");
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment(" <li><a href=\"/mydashboards\">Weekly Snapshot</a></li>\n                <li><a href=\"/dashboards/1\">Beneficiary Info</a></li>\n                <li><a href=\"/dashboards/2\">Refugee Flow</a></li>\n                <li><a href=\"/dashboards/3\">Program Analytics and Insights</a></li> ");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                \n                \n              ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            \n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" <ul class=\"nav navbar navbar-right\">\n            <li class=\"dropdown pull-right\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{session.currentUser.name}} <span class=\"caret\"></span></a>\n              <ul class=\"nav navbar-nav dropdown-menu navbar-right\">\n                <li>Log out</li>\n              </ul>\n            </li>\n          </ul> ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          \n\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          dom.setAttribute(el2, "class", "nav navbar-nav navbar-right user-cntrl-panel");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          var el4 = dom.createElement("img");
          dom.setAttribute(el4, "class", "img-responsive user");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          dom.setAttribute(el3, "class", "dropdown");
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4, "href", "#");
          dom.setAttribute(el4, "class", "dropdown-toggle");
          dom.setAttribute(el4, "data-toggle", "dropdown");
          dom.setAttribute(el4, "role", "button");
          dom.setAttribute(el4, "aria-haspopup", "true");
          dom.setAttribute(el4, "aria-expanded", "false");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode(" ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.setAttribute(el5, "class", "caret");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("ul");
          dom.setAttribute(el4, "class", "dropdown-menu");
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          var el6 = dom.createElement("a");
          dom.setAttribute(el6, "href", "/login");
          var el7 = dom.createTextNode("Log Out");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                \n              ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          \n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("/.nav-collapse ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [5]);
          var element3 = dom.childAt(element2, [1, 0]);
          var element4 = dom.childAt(element2, [3]);
          var element5 = dom.childAt(element4, [3, 1, 0]);
          var morphs = new Array(7);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [1, 3]), 3, 3);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [5, 3]), 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [7]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element1, [9]), 0, 0);
          morphs[4] = dom.createAttrMorph(element3, 'src');
          morphs[5] = dom.createMorphAt(dom.childAt(element4, [1]), 0, 0);
          morphs[6] = dom.createElementMorph(element5);
          return morphs;
        },
        statements: [["block", "each", [["get", "ownerBoards", ["loc", [null, [25, 24], [25, 35]]]]], [], 0, null, ["loc", [null, [25, 16], [27, 25]]]], ["block", "each", [["get", "sharedBoards", ["loc", [null, [42, 24], [42, 36]]]]], [], 1, null, ["loc", [null, [42, 16], [44, 25]]]], ["block", "link-to", ["dashboards", "new"], [], 2, null, ["loc", [null, [49, 16], [49, 67]]]], ["block", "link-to", ["datasources"], [], 3, null, ["loc", [null, [50, 16], [50, 66]]]], ["attribute", "src", ["concat", [["get", "session.currentUser.picture", ["loc", [null, [64, 56], [64, 83]]]]]]], ["content", "session.currentUser.fullName", ["loc", [null, [66, 130], [66, 162]]]], ["element", "action", [["get", "session.logout", ["loc", [null, [68, 46], [68, 60]]]]], [], ["loc", [null, [68, 37], [68, 62]]]]],
        locals: [],
        templates: [child0, child1, child2, child3]
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
            "line": 91,
            "column": 0
          }
        },
        "moduleName": "tolaboard/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "navbar navbar-default navbar-fixed-top");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "navbar-header");
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "navbar-toggle collapsed");
        dom.setAttribute(el4, "data-toggle", "collapse");
        dom.setAttribute(el4, "data-target", "#navbar");
        dom.setAttribute(el4, "aria-expanded", "false");
        dom.setAttribute(el4, "aria-controls", "navbar");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "sr-only");
        var el6 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("          \n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("      ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "nav-spacer");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <div id=\"footer\"> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Sticky Footer ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <div class=\"container\">\n                <div class=\"col-md-6 text-left\">\n                    <a href=\"http://www.toladata.com\" class=\"text-muted\"><b>Tola</b>Data: Built by</a> <a href=\"http://www.mercycorps.org\" class=\"text-muted\">MercyCorps</a>\n                </div>\n                <div class=\"col-md-6 text-right\">\n                    <a href=\"http://tola.work/documentation\" class=\"text-muted\">Documentation</a> | <a href=\"http://tola.work/faq\" class=\"text-muted\">FAQ</a> | <a href=\"http://tola.work/helpdesk/tickets/submit/\" class=\"text-muted\">Feedback</a> | <a href=\"https://github.com/toladata/TolaActivity/blob/master/LICENSE\" class=\"text-muted\">License</a>\n                </div>\n            </div> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" </div> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element6 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element6, [1]), 3, 3);
        morphs[1] = dom.createMorphAt(element6, 3, 3);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], ["class", "navbar-brand"], 0, null, ["loc", [null, [10, 10], [12, 22]]]], ["block", "if", [["get", "session.isLoggedIn", ["loc", [null, [15, 14], [15, 32]]]]], [], 1, null, ["loc", [null, [15, 8], [75, 15]]]], ["content", "outlet", ["loc", [null, [79, 0], [79, 10]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});