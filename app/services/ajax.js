import Ajax from "ember-ajax/services/ajax";

export default class AjaxService extends Ajax {
  host = "http://jsonplaceholder.typicode.com/";

  /**
   * Every request made using our ajax service is going to use their "raw" method, which is a great
   * way to get access to the response metadata.
   */
  request(url, options) {
    return super.raw(url, options);
  }
}