import { module } from 'qunit';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import { authenticateSession } from 'sample-front-end/tests/helpers/ember-simple-auth';

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      this.application = startApp();
      authenticateSession(this.application);

      if (options.beforeEach) {
        options.beforeEach.apply(this, arguments);
      }
    },

    afterEach() {
      destroyApp(this.application);

      if (options.afterEach) {
        options.afterEach.apply(this, arguments);
      }
    }
  });
}
