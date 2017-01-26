import DS from 'ember-data';

export default DS.Model.extend({
    owner: DS.belongsTo('User', {async: false}),
    title: DS.attr('string'),
    createDate: DS.attr('date'),
    updateDate: DS.attr('date')
});
