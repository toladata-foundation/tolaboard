import DS from 'ember-data';

export default DS.Model.extend({
    owner: DS.belongsTo('User', {inverse: 'graphs', async: false}),
    title: DS.attr('string'),
});
