import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tournaments');
  this.route('tournament', { path: '/touraments/:tournament_id' });
  this.route('users');
  this.route('user', { path: '/users/:user_id' });
});

export default Router;
