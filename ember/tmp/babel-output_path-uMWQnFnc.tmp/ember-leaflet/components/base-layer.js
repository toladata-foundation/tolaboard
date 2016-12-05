define('ember-leaflet/components/base-layer', ['exports', 'ember', 'ember-composability-tools', 'ember-invoke-action'], function (exports, _ember, _emberComposabilityTools, _emberInvokeAction) {
  'use strict';

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  })();

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  /* global L */

  var assert = _ember['default'].assert;
  var computed = _ember['default'].computed;
  var Component = _ember['default'].Component;
  var run = _ember['default'].run;
  var K = _ember['default'].K;
  var A = _ember['default'].A;
  var classify = _ember['default'].String.classify;

  exports['default'] = Component.extend(_emberComposabilityTools.ChildMixin, _emberInvokeAction.InvokeActionMixin, {
    tagName: '',
    L: L,

    concatenatedProperties: ['leafletOptions', 'leafletRequiredOptions', 'leafletEvents', 'leafletProperties'],

    createLayer: function createLayer() {
      assert('BaseLayer\'s `createLayer` should be overriden.');
    },

    didCreateLayer: K,
    willDestroyLayer: K,

    /*
     * Method called by parent when the layer needs to setup
     */
    didInsertParent: function didInsertParent() {
      this._layer = this.createLayer();
      this._addObservers();
      this._addEventListeners();
      if (this.get('parentComponent')) {
        this.addToContainer();
      }
      this.didCreateLayer();
    },

    /*
     * Default logic for adding the layer to the container
     */
    addToContainer: function addToContainer() {
      this.get('parentComponent')._layer.addLayer(this._layer);
    },

    /*
     * Method called by parent when the layer needs to teardown
     */
    willDestroyParent: function willDestroyParent() {
      this.willDestroyLayer();
      this._removeEventListeners();
      this._removeObservers();
      if (this.get('parentComponent') && this._layer) {
        this.removeFromContainer();
      }
      delete this._layer;
    },

    /*
     * Default logic for removing the layer from the container
     */
    removeFromContainer: function removeFromContainer() {
      this.get('parentComponent')._layer.removeLayer(this._layer);
    },

    leafletOptions: [],
    options: computed(function () {
      var _this = this;

      var leafletOptions = this.get('leafletOptions');
      var options = {};
      leafletOptions.forEach(function (optionName) {
        if (_this.get(optionName) !== undefined) {
          options[optionName] = _this.get(optionName);
        }
      });
      return options;
    }),

    leafletRequiredOptions: [],
    requiredOptions: computed(function () {
      var _this2 = this;

      var leafletRequiredOptions = this.get('leafletRequiredOptions');
      var options = [];
      leafletRequiredOptions.forEach(function (optionName) {
        assert('`' + optionName + '` is a required option but its value was `' + _this2.get(optionName) + '`', _this2.get(optionName));
        options.push(_this2.get(optionName));
      });
      return options;
    }),

    leafletEvents: A(),
    usedLeafletEvents: computed('leafletEvents', function () {
      var _this3 = this;

      return this.get('leafletEvents').filter(function (eventName) {
        var methodName = '_' + eventName;
        var actionName = 'on' + classify(eventName);
        return _this3.get(methodName) !== undefined || _this3.get(actionName) !== undefined;
      });
    }),

    _addEventListeners: function _addEventListeners() {
      var _this4 = this;

      this._eventHandlers = {};
      this.get('usedLeafletEvents').forEach(function (eventName) {

        var actionName = 'on' + classify(eventName);
        var methodName = '_' + eventName;
        // create an event handler that runs the function inside an event loop.
        _this4._eventHandlers[eventName] = function (e) {
          var _this5 = this;

          run(function () {
            //try to invoke/send an action for this event
            _this5.invokeAction(actionName, e);
            //allow classes to add custom logic on events as well
            if (typeof _this5[methodName] === 'function') {
              run(_this5, _this5[methodName], e);
            }
          });
        };

        _this4._layer.addEventListener(eventName, _this4._eventHandlers[eventName], _this4);
      });
    },

    _removeEventListeners: function _removeEventListeners() {
      var _this6 = this;

      if (this._eventHandlers) {
        this.get('usedLeafletEvents').forEach(function (eventName) {
          _this6._layer.removeEventListener(eventName, _this6._eventHandlers[eventName], _this6);
          delete _this6._eventHandlers[eventName];
        });
      }
    },

    leafletProperties: [],

    _addObservers: function _addObservers() {
      var _this7 = this;

      this._observers = {};
      this.get('leafletProperties').forEach(function (propExp) {
        var _propExp$split = propExp.split(':');

        var _propExp$split2 = _toArray(_propExp$split);

        var property = _propExp$split2[0];
        var leafletProperty = _propExp$split2[1];

        var params = _propExp$split2.slice(2);

        if (!leafletProperty) {
          leafletProperty = 'set' + classify(property);
        }
        var objectProperty = property.replace(/\.\[]/, ''); //allow usage of .[] to observe array changes

        _this7._observers[property] = function () {
          var _layer$leafletProperty,
              _this8 = this;

          var value = this.get(objectProperty);
          assert(this.constructor + ' must have a ' + leafletProperty + ' function.', !!this._layer[leafletProperty]);
          var propertyParams = params.map(function (p) {
            return _this8.get(p);
          });
          (_layer$leafletProperty = this._layer[leafletProperty]).call.apply(_layer$leafletProperty, [this._layer, value].concat(_toConsumableArray(propertyParams)));
        };

        _this7.addObserver(property, _this7, _this7._observers[property]);
      });
    },

    _removeObservers: function _removeObservers() {
      var _this9 = this;

      if (this._observers) {
        this.get('leafletProperties').forEach(function (propExp) {
          var _propExp$split3 = propExp.split(':');

          var _propExp$split32 = _slicedToArray(_propExp$split3, 1);

          var property = _propExp$split32[0];

          _this9.removeObserver(property, _this9, _this9._observers[property]);
          delete _this9._observers[property];
        });
      }
    }

  });
});