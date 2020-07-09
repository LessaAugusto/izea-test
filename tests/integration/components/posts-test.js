import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | posts", function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    // Setups the router so that we can access the URL inside the component.
    this.owner.setupRouter();

    this.setProperties({
      posts: [{
        userId: 1,
        id: 1,
        title: `sunt aut facere repellat provident occaecati
        excepturi optio reprehenderit`,
        //eslint-disable-next-line max-len
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        //eslint-disable-next-line max-len
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      ]
    })
  })

  test("it should render correctly", async function(assert) {
    await render(hbs`
      <Posts @posts={{this.posts}} @totalNumberOfPages={{4}}/>
    `);

    assert.dom("[data-test-posts-container]").exists();

    // The posts should have the proper title.
    assert.dom("[data-test-title-container='0']").exists();
    assert.dom("[data-test-title-container='0']").hasText(`sunt
    aut facere repellat provident occaecati excepturi optio reprehenderit`);

    assert.dom("[data-test-title-container='1']").exists();
    assert.dom("[data-test-title-container='1']").hasText("qui est esse");
  });

  test("it should toggle the modal", async function(assert) {
    await render(hbs`
      <Posts @posts={{this.posts}} @totalNumberOfPages={{4}}/>
    `);

    // The modal should be initially closed.
    assert.dom("[data-test-modal-container]").doesNotExist();
    assert.dom("[data-test-close-button]").doesNotExist();

    await click("[data-test-title-container='0']");

    assert.dom("[data-test-modal-container]").exists();
    assert.dom("[data-test-close-button]").exists();
  });
});
