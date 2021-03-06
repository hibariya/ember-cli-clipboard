import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | test helpers');

test('test-helpers', function(assert) {
  assert.expect(3);

  visit('/');
  andThen(() => {
    assert.notOk(!!find('.alert').length,
      'no alert message is initially present');
  });

  triggerCopySuccess();

  andThen(() => {
    assert.ok(!!find('.alert.alert-success').length,
      'a success message is displayed when a copy is successful');
  });

  triggerCopyError();

  andThen(() => {
    assert.ok(!!find('.alert.alert-info').length,
      'an error message is displayed when a copy is unsuccessful');
  });
});
