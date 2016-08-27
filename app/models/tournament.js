import DS from 'ember-data';

export default DS.Model.extend({
  type: "tournament",
  name: DS.attr('string'),
  description: DS.attr('string')
});
