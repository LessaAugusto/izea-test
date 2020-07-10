import { module, test } from "qunit";
import { setupRenderingTest, skip } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | posts/user-info", function(hooks) {
  setupRenderingTest(hooks);

  skip("it renders", async function(assert) {
    // Set any properties with this.set("myProperty", "value");
    // Handle any actions with this.set("myAction", function(val) { ... });

    await render(hbs`<Posts::UserInfo />`);

    assert.equal(this.element.textContent.trim(), "");

    // Template block usage:
    await render(hbs`
      <Posts::UserInfo>
        template block text
      </Posts::UserInfo>
    `);

    assert.equal(this.element.textContent.trim(), "template block text");
  });
});
