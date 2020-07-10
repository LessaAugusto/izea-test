import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export const LIMIT_PER_PAGE = 6;

export default class IndexRoute extends Route {
  @service ajax;

  queryParams = {
    page: {
      refreshModel: true
    },
  }

  /**
   * This method queries for the posts of this page, asking the endpoint to return the info about
   * the user related to this post.
   */
  async model({ page = 1 }) {
    const records = await this.store.query("post", {
      _limit: LIMIT_PER_PAGE,
      _page: page,
      _expand: "user"
    });

    return records;
  }

  /**
   * This method is going to redirect the user to the first page if they try to go to an invalid
   * page (greater than the max number of pages or minor than or equal to zero).
   */
  afterModel(model) {
    const { query, meta } = model;
    if (query && meta && (query._page > meta.total || query._page <= 0)) {
      this.transitionTo("index", { queryParams: { page: 1 }});
    }
  }
}