import RESTSerializer from "@ember-data/serializer/rest";

/**
 * Default serializer of the application.
 */
export default class ApplicationSerializer extends RESTSerializer {
  /**
   * This method normalizes the response coming from the server (this response comes completely
   * raw). It just gets the response object and ignores all metadata.
   */
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const { response } = payload;

    const ans = {
      [primaryModelClass.modelName]: response,
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
