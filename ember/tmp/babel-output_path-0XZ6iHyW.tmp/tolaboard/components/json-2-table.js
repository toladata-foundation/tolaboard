define('tolaboard/components/json-2-table', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({

		didRenderCounter: 0,

		didFullyRender: function didFullyRender() {
			// this.set('showVizSelection', true);
		},

		didUpdate: function didUpdate() {
			this.set('showVizSelection', true);
		},

		didRender: function didRender() {
			this.didRenderCounter += 1;
			if (this.didRenderCounter === 2) {
				this.didFullyRender();
			}
		},

		didInsertElement: function didInsertElement() {
			// console.log('didInsertElement on json-2-table invoked');
		}
	});
});