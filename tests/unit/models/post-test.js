import { module, test } from "qunit";
import { setupTest, skip } from "ember-qunit";

module("Unit | Model | posts", function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  skip("it exists", function(assert) {
    let store = this.owner.lookup("service:store");
    let model = store.createRecord("posts", {});
    assert.ok(model);
  });
});
