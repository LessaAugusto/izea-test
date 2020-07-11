import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | posts/post-info", function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.setProperties({
      post: {
        userId: 1,
        id: 1,
        title: `sunt aut facere repellat provident occaecati
        excepturi optio reprehenderit`,
        //eslint-disable-next-line max-len
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
    });
  });

  test("it should render correctly", async function(assert) {
    await render(hbs`
      <Posts::PostInfo @postData={{this.post}}/>
    `);

    assert.dom("[data-test-post-info-container]").exists();
  });
});
