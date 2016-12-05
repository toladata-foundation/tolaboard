define("tolaboard/serializers/silo", ["exports", "ember-data"], function (exports, _emberData) {
	exports["default"] = _emberData["default"].RESTSerializer.extend({
		rawData: "data"
	});
});