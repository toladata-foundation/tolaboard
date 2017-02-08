import Ember from 'ember';

export default Ember.Component.extend({

	dataAgg: Ember.inject.service('data-aggregator'),

	lat: 37.0660,
	lng: 37.3781,
	zoom: 10,

	didInsertElement() {
		console.log('LEAFLET MAP',this);

		

	}
});
