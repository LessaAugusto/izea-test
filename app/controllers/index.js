import Controller from "@ember/controller";

/**
 * This controller is necessary just to say we can have query params in the URL of this route.
 */
export default class IndexController extends Controller {
  queryParams = ["page"];

  page = 1;
}
