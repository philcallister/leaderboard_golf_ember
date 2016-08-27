import Ember from 'ember';

const Tournament = Ember.Object.extend({
});

let add_tournament = Tournament.create({
  name: '',
  description: ''
});

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      tournaments: this.store.findAll('tournament'),
      add_tournament: add_tournament
    });
  },
  actions: {
    xxx: function(tournament) {
      console.log(tournament);
    }
  }
});