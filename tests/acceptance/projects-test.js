import { test } from 'qunit';
import moduleForAcceptance from 'sample-front-end/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | projects');

test('visiting /projects', function(assert) {
  visit('/projects');

  andThen(function() {
    assert.equal(currentURL(), '/projects');
  });
});

test('the basic dom elements', function(assert) {
  visit('/projects');

  andThen(function() {
    assert.equal(find('.projects-section h1').text(), 'Projects');
  });
});
