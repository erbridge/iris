import { moduleForModel, test } from 'ember-qunit';

moduleForModel('room', 'Unit | Model | room', {
  // Specify the other units that are required for this test.
  needs: ['model:schedule', 'model:device']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
