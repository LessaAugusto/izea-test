import RESTAdapter from "@ember-data/adapter/rest";
import { inject as service} from "@ember/service";
import { alias } from "@ember/object/computed";

/**
 * Default adapter of the application.
 */
export default class ApplicationAdapter extends RESTAdapter {
  // Changes the host to match our api.
  host = "http://jsonplaceholder.typicode.com";

  /**
   * ember-ajax's mixin code. This mixin is provided to be used in an Ember Data adapter. The reason
   * this code is copied and paste here is that there is no need to use a mixin.
   */
  @service("ajax") ajaxService;
  @alias("ajaxService.host") host;
  @alias("ajaxService.namespace") namespace;
  @alias("ajaxService.headers") headers;

  ajax(url) {
    const augmentedOptions = this.ajaxOptions(...arguments);

    return this.ajaxService.request(url, augmentedOptions);
  }
}