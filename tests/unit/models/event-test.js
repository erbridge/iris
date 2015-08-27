import { moduleForModel, test } from 'ember-qunit';

moduleForModel('event', 'Unit | Model | event', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('first day is Monday', function(assert) {
  var model = this.subject({
    seconds: 0,
  });

  assert.equal(model.get('dayLabel'), 'monday');
});