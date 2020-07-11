import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

import { SERVER_RESPONSE_MOCK } from "./utils";

module("Unit | Serializer | application", function(hooks) {
  setupTest(hooks);

  test("it should normalize a server response correctly", function(assert) {
    // Gets the serializer for the application.
    const store = this.owner.lookup("service:store");
    // It's going to use the user model as the primary model class.
    const userModel = store.modelFor("user");
    const serializer = store.serializerFor("application");

    // Gets the expected return for a request made to the /users endpoint.
    const {
      response: [
        { user: USER_DATA }
      ]
    } = SERVER_RESPONSE_MOCK;

    // Calls the method we want to test.
    const response = serializer.normalizeResponse(
      store,
      userModel,
      { response: USER_DATA },
      null,
      "findAll"
    );

    // That's the expected response
    const expectedResponse = {
      data: {
        attributes: {
          address: USER_DATA.address,
          company: USER_DATA.company,
          email: USER_DATA.email,
          name: USER_DATA.name,
          phone: USER_DATA.phone,
          username: USER_DATA.username,
          website: USER_DATA.website,
        },
        id: USER_DATA.id.toString(),
        relationships:  {},
        type: "user",
      },
      included: [],
    };

    assert.deepEqual(response, expectedResponse);
  });
});
