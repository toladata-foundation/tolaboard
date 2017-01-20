import DS from 'ember-data';

export default DS.Model.extend({
    owner: DS.belongsTo('User', {inverse: 'graphs', async: false}),
    thumbnail: DS.attr('string'),
    ember_component: DS.attr('string'),
});
