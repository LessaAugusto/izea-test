import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click, currentURL } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | posts/pagination", function(hooks) {
  setupRenderingTest(hooks);
  
  hooks.beforeEach(function() {
    // Setups the router so that we can trigger a route transition inside the component.
    this.owner.setupRouter();
  })

  test("it should render correctly", async function(assert) {
    await render(hbs`
      <Posts::Pagination @totalNumberOfPages={{4}} />
    `);

    assert.dom("[data-test-pages-container]").exists();
    assert.dom("[data-test-arrow-left]").hasText("<");
    assert.dom("[data-test-arrow-right]").hasText(">");
    
    /* Initially, the user will be on page 1. There should be two segments:
    [1,2] [3,4]. */
    assert.dom("[data-test-pages-segments='0']").exists();
    assert.dom("[data-test-pages-segments='1']").exists();
    assert.dom("[data-test-pages-segments='2']").doesNotExist();

    /* All four pages should be visible. */
    assert.dom("[data-test-page-num='1']").hasText("1");
    assert.dom("[data-test-page-num='2']").hasText("2");
    assert.dom("[data-test-page-num='3']").hasText("3");
    assert.dom("[data-test-page-num='4']").hasText("4");

    /* The user should be on page 1. */
    assert.dom("[data-test-page-num-container='0']").hasClass("active-page");
  });

  test(
    "the user should be able to go to another page",
    async function(assert) {
      await render(hbs`
        <Posts::Pagination @totalNumberOfPages={{4}} />
      `);

      // Initially the current URL should be null (index route, page 1).
      assert.equal(currentURL(), null);

      // Goes to page 3
      await click("[data-test-page-num='3']");
      assert.equal(currentURL(), "/?page=3");

      // Goes to page 4 (clicking on the right-arrow)
      await click("[data-test-arrow-right]");
      assert.equal(currentURL(), "/?page=4");

      // Goes back to page 3 (clicking on the left-arrow)
      await click("[data-test-arrow-left]");
      assert.equal(currentURL(), "/?page=3");

    }
  );

  test(
    "the user should not be able to go a page that does not exists",
    async function(assert) {
      await render(hbs`
        <Posts::Pagination @totalNumberOfPages={{4}} />
      `);

      // Initially the current URL should be null (index route, page 1).
      assert.equal(currentURL(), null);

      // Tries to go to page 0 
      await click("[data-test-arrow-left]");
      assert.equal(currentURL(), "/?page=1");

      // Goes to page 4
      await click("[data-test-page-num='4']");
      assert.equal(currentURL(), "/?page=4");

      // Tries to go to page 5
      await click("[data-test-arrow-right]");
      assert.equal(currentURL(), "/?page=4");
    });
});
