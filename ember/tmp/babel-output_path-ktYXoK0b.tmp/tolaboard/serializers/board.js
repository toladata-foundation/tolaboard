define("tolaboard/serializers/board", ["exports", "ember-data"], function (exports, _emberData) {
	exports["default"] = _emberData["default"].RESTSerializer.extend({
		primaryKey: "_id"
	});
});