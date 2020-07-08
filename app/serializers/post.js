import RESTSerializer from "@ember-data/serializer/rest";
import { LIMIT_PER_PAGE } from "izea-test/routes";

export default class PostSerializer extends RESTSerializer {
  /**
   * This method is going to normalize the response coming from the server. It needs to be here,
   * after all we must have access to the response header "x-total-count", this is going to tell us
   * how many pages we should show to the user. The method puts this metadata inside the "meta" attribute
   * of the payload (just like ember expects).
   */
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const { response, jqXHR } = payload;
    const totalRecords = jqXHR.getResponseHeader("x-total-count");

    const ans = {
      posts: [...response],
      meta: {
        total: Math.ceil(parseInt(totalRecords)/LIMIT_PER_PAGE),
      }
    };

    return super.normalizeResponse(
      store,
      primaryModelClass,
      ans,
      id,
      requestType
    );
  }
}