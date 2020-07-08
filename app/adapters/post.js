import RESTAdapter from "@ember-data/adapter/rest";
import { inject as service} from "@ember/service";
import { alias } from "@ember/object/computed";

export default class PostAdapter extends RESTAdapter {
  // Changing the host to match our api.
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

  // buildURL(modelName, id, snapshot) {
  //   const { adapterOptions } = snapshot;
  //   const searchParams = new URLSearchParams();
    
  //   Object.keys(adapterOptions).forEach(
  //     key => searchParams.append(key, adapterOptions[key])
  //   );

  //   const url = super.buildURL(...arguments);
  //   return `${url}?${searchParams.toString()}`;
  // }

  // findAll(store, type, neverSet, snapshotRecordArray) {
  //   const {
  //     _limit,
  //     _page,
  //   } = snapshotRecordArray.adapterOptions;
  //   return new Promise((resolve, reject) => {
  //     this.ajax.raw("/posts", {
  //       method: "GET",
  //       data: {
  //         _limit,
  //         _page,
  //       }
  //     }).then(res => {
  //       const { response, jqXHR } = res;
  //       const totalRecords = jqXHR.getResponseHeader("x-total-count");

  //       resolve({
  //         posts: response,
  //         meta: {
  //           total: Math.ceil(parseInt(totalRecords)/_limit),
  //         }
  //       });
  //     }).catch(err => {
  //       reject(err);
  //     });
  //   });

  // }
}