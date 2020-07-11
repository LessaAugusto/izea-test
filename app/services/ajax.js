import Ajax from "ember-ajax/services/ajax";
import ENV from "izea-test/config/environment";

export default class AjaxService extends Ajax {
  host = ENV.APP.API;

  /**
   * Every request made using our ajax service is going to use their "raw" method, which is a great
   * way to get access to the response metadata.
   */
  request(url, options) {
    return super.raw(url, options);
  }
}