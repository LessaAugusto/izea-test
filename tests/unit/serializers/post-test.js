import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import { LIMIT_PER_PAGE } from "izea-test/routes";

import { SERVER_RESPONSE_MOCK, TOTAL_RECORDS_MOCK } from "./utils";

module("Unit | Serializer | post", function(hooks) {
  setupTest(hooks);

  test("it should normalize a server response correctly", function(assert) {
    // Gets the serializer for the post model.
    const store = this.owner.lookup("service:store");
    const postModel = store.modelFor("post");
    const serializer = store.serializerFor("post");

    // Calls the method we want to test.
    const response = serializer.normalizeResponse(
      store,
      postModel,
      SERVER_RESPONSE_MOCK,
      null,
      "findAll"
    );

    const { response: [postData] } = SERVER_RESPONSE_MOCK;

    // That's the expected response
    const expectedResponse = {
      data: [{
        attributes: {
          body: postData.body,
          title: postData.title,
        },
        id: postData.id.toString(),
        relationships:  {
          userId: {
            data: {
              id: postData.user.id.toString(),
              type: "user",
            },
          },
        },
        type: "post",
      }],
      included: [],
      meta: {
        total: Math.ceil(parseInt(TOTAL_RECORDS_MOCK)/LIMIT_PER_PAGE),
      }
    };

    assert.deepEqual(response, expectedResponse);
  });
});
