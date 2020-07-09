import { module, test } from "qunit";
import { setupTest, skip } from "ember-qunit";

module("Unit | Adapter | application", function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  skip("it exists", function(assert) {
    let adapter = this.owner.lookup("adapter:application");
    assert.ok(adapter);
  });
});
