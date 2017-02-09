import DS from 'ember-data';

export default DS.Model.extend({
    label: DS.attr('string'),
    thumbnail: DS.attr('string'),
    embercomponent: DS.attr('string'),
    graphmodels: DS.hasMany('graphmodel', {inverse: 'graph', async: false})
});
