import DS from 'ember-data';

export default DS.Model.extend({
    graph: DS.belongsTo('Graph', {inverse: 'graphmodels', async: false}),
    name: DS.attr('string'),
    label: DS.attr('string'),
    is_required: DS.attr('boolean'),
    input_type: DS.attr('string'),
});
