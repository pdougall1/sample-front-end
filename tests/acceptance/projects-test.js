import { test } from 'qunit';
import moduleForAcceptance from 'sample-front-end/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | projects');

test('visiting /projects', (assert) => {
  visit('/projects');

  andThen(() => {
    assert.equal(currentURL(), '/projects');
  });
});

test('the basic dom elements', (assert) => {
  visit('/projects');

  andThen(() => {
    assert.equal(find('.projects-section h1').text(), 'Projects');
  });
});
