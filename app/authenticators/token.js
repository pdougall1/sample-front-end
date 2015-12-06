import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  serverTokenEndpoint: 'http://localhost:3000/sessions',

  // restore(data) {
  // },

  authenticate(identification, password) {
    let _this = this;
    let data = { identification: identification, password: password };
    return new Ember.RSVP.Promise(function(resolve, reject) {
      _this.makeRequest(data).then(function(resp) {
        Ember.run(function() {
          resolve(resp);
        });
      }, function(xhr) {
        Ember.run(function() {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  },

  makeRequest: function(data) {
    let url = this.serverTokenEndpoint;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url:        url,
        type:       'POST',
        data:       data,
        dataType:   'json',
        success:    function(data, status, xhr) { resolve(data, status, xhr); },
        error:      function(xhr, status, error) { reject(xhr, status, error); },
        beforeSend: function(xhr, settings) {
          xhr.setRequestHeader('Accept', settings.accepts.json);
        }
      });
    });
  }
});
