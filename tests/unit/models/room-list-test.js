import { moduleForModel, test } from 'ember-qunit';

moduleForModel('room-list', 'Unit | Model | room list', {
  // Specify the other units that are required for this test.
  needs: ['model:room']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
