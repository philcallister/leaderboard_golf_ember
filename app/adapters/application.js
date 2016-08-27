import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://localhost:4000/api',
    ajax: function(url, method, hash) {
        hash.crossDomain = true;
        return this._super(url, method, hash);
    }
});
