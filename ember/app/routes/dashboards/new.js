import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('board');
    },

    actions: {
        saveCategory(newBoard) {
            newBoard.save().then(() => this.transitionTo('dashboards'));
        },

        willTransition() {
            this.controller.get('model').rollbackAttributes();
        }
    }
});
