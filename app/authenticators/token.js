import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  serverTokenEndpoint: 'http://localhost:3000/sessions',

  // restore(data) {
  // },

  authenticate (identification, password) {
    let _this = this;
    let data = { identification: identification, password: password };
    return new Ember.RSVP.Promise((resolve, reject) => {
      _this.makeRequest(data).then((resp) => {
        Ember.run(() => {
          resolve(resp);
        });
      }, (xhr) => {
        Ember.run(() => {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  },

  makeRequest (data) {
    let url = this.serverTokenEndpoint;
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url:        url,
        type:       'POST',
        data:       data,
        dataType:   'json',
        success:    (data, status, xhr) => { resolve(data, status, xhr); },
        error:      (xhr, status, error) => { reject(xhr, status, error); },
        beforeSend: (xhr, settings) => {
          xhr.setRequestHeader('Accept', settings.accepts.json);
        }
      });
    });
  }
});
