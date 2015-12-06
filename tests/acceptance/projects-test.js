import { test } from 'qunit';
import authenticatedModuleForAcceptance from 'sample-front-end/tests/helpers/authenticated-module-for-acceptance';

authenticatedModuleForAcceptance('Acceptance | projects');

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
