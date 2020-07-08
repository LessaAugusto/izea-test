import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export const LIMIT_PER_PAGE = 7;

export default class IndexRoute extends Route {
  @service ajax;

  queryParams = {
    page: {
      refreshModel: true
    },
  }

  async model({ page = 1 }) {
    const records = await this.store.query("post", {
      _limit: LIMIT_PER_PAGE,
      _page: page,
    });

    return records;
    // const { response, jqXHR } = await this.ajax.raw("/posts", {
    //   method: "GET",
    //   data: {
    //     _limit: LIMIT_PER_PAGE,
    //     _page: page,
    //   }
    // });

    // const resObj = {
    //   response: [],
    //   totalPageNumber: 0,
    // };

    // const totalRecords = jqXHR.getResponseHeader("x-total-count");

    // resObj.response = response;
    // resObj.totalPageNumber = Math.ceil(parseInt(totalRecords)/LIMIT_PER_PAGE);

    // return resObj;
  }

  /**
   * This method is going to redirect the user to the first page if they try to go to a page greater
   * than the max number of pages.
   */
  afterModel(model) {
    const { query, meta } = model;
    if (query && meta && query._page > meta.total) {
      this.transitionTo("posts", { queryParams: { page: 1 }});
    }
  }
}