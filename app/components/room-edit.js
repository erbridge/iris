import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.room.save();
    },
  },
});