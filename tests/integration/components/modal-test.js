import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | modal", function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    // The modal will be initially closed.
    this.setProperties({ isModalVisible: false });
    this.set("onClose", () => {
      this.setProperties({ isModalVisible: false });
    });
  });

  test("the modal should open and close successfully", async function(assert) {
    await render(hbs`
      <Modal
        @isVisible={{this.isModalVisible}}
        @onClose={{this.onClose}}
      >
        IZEA is the best company!
      </Modal>
    `);

    // It should not exist.
    assert.dom("[data-test-modal-container]").doesNotExist();

    this.setProperties({ isModalVisible: true });

    // The modal should be visible now.
    assert.dom("[data-test-modal-container]").containsText(
      "IZEA is the best company!"
    );

    // Clicks on the close button (the modal should disappear).
    await click("[data-test-close-button]");

    assert.dom("[data-test-modal-container]").doesNotExist();
  });
});
