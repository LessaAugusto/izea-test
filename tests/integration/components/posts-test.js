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
        user: {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496"
            }
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
          }
        },
        userId: 1,
        id: 1,
        title: `sunt aut facere repellat provident occaecati
        excepturi optio reprehenderit`,
        //eslint-disable-next-line max-len
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        user: {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496"
            }
          },
        },
        userId: 1,
        id: 2,
        title: "qui est esse",
        //eslint-disable-next-line max-len
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      ]
    });
  });

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

  test("it should pass the correct data to the modal", async function(assert) {
    await render(hbs`
      <Posts @posts={{this.posts}} @totalNumberOfPages={{4}}/>
    `);

    // Opens the first post.
    await click("[data-test-title-container='0']");

    // The post data should be correct
    assert.dom("[data-test-post-title]").hasText(`sunt aut facere
    repellat provident occaecati excepturi optio reprehenderit`);
    //eslint-disable-next-line max-len
    assert.dom("[data-test-post-body]").hasText("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");

    // The user data should be correct.
    assert.dom("[data-test-user-name]").hasText("Leanne Graham");
    assert.dom("[data-test-user-email]").hasText("Sincere@april.biz");
    assert.dom("[data-test-user-phone]").hasText("1-770-736-8031 x56442");
    assert.dom("[data-test-user-website]").hasText("hildegard.org");
    assert.dom("[data-test-user-address]").hasText("Kulas Light, Apt. 556");

  });
});
