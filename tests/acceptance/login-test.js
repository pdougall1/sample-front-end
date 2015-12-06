import { test } from 'qunit';
import moduleForAcceptance from 'sample-front-end/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('filling out form', function(assert) {
  visit('/login');
  fillIn('#identification', "dougs");
  fillIn('#password', "password");
  click('button.submit');

  andThen(function() {
    assert.equal(find('.projects-section h1').text(), 'Projects');
    assert.equal(find('.menu a').text(), 'Logout');
  });
});

test('filling out form with bad data', function(assert) {
  visit('/login');
  fillIn('#identification', "wrong@example.com");
  fillIn('#password', "password");
  click('button.submit');

  andThen(function() {
    assert.notEqual(find('.projects-section h1').text(), 'Projects');
    assert.equal(find('.menu a').text(), 'Login');
  });
});
