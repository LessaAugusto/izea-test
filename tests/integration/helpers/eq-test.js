import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Helper | eq", function(hooks) {
  setupRenderingTest(hooks);

  test(
    "it should correctly check whether two integers are equal",
    async function(assert) {
      this.set("firstValue", 5);
      this.set("secondValue", 5);

      await render(hbs`{{eq this.firstValue this.secondValue}}`);

      assert.equal(this.element.textContent.trim(), "true");

      this.set("firstValue", 4);
      this.set("secondValue", 5);

      assert.equal(this.element.textContent.trim(), "false");
    }
  );

  test(
    "it should correctly check whether two strings are equal",
    async function(assert) {
      this.set("firstValue", "5455");
      this.set("secondValue", "5455");

      await render(hbs`{{eq this.firstValue this.secondValue}}`);

      assert.equal(this.element.textContent.trim(), "true");

      this.set("firstValue", "4444");
      this.set("secondValue", "5555");

      assert.equal(this.element.textContent.trim(), "false");
    }
  );
});
