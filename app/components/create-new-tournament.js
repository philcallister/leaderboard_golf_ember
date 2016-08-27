import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        createTournament: function (add_tournament) {
          console.log("!!!!! HERE...")
          this.sendAction('xxx', add_tournament);
        }
    }
});