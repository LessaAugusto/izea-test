import RESTSerializer from "@ember-data/serializer/rest";
import { LIMIT_PER_PAGE } from "izea-test/routes";

/**
 * We must create a custom serializer to the post model because we must have access to the "x-total-count"
 * response header, this is going to tell us how many pages we should show to the user. The default
 * serializer doesn't care about metadata, this one must care.
 */
export default class PostSerializer extends RESTSerializer {
  /**
   * This method puts the metadata inside the "meta" attribute of the payload (just like ember expects).
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