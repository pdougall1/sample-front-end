import { test } from 'qunit';
import moduleForAcceptance from 'sample-front-end/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', (assert) => {
  visit('/login');

  andThen(() => {
    assert.equal(currentURL(), '/login');
  });
});

test('filling out form', (assert) => {
  visit('/login');
  fillIn('#identification', "dougs");
  fillIn('#password', "password");
  click('button.submit');

  andThen(() => {
    assert.equal(find('.projects-section h1').text(), 'Projects');
    assert.equal(find('.menu a').text(), 'Logout');
  });
});

test('filling out form with bad identifier', (assert) => {
  visit('/login');
  fillIn('#identification', "wrong@example.com");
  fillIn('#password', "password");
  click('button.submit');

  andThen(() => {
    assert.notEqual(find('.projects-section h1').text(), 'Projects');
    assert.equal(find('.menu a').text(), 'Login');
  });
});

test('filling out form with bad password', (assert) => {
  visit('/login');
  fillIn('#identification', "dougs");
  fillIn('#password', "bad-password");
  click('button.submit');

  andThen(() => {
    assert.notEqual(find('.projects-section h1').text(), 'Projects');
    assert.equal(find('.menu a').text(), 'Login');
  });
});
