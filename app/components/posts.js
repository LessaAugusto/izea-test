import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class PostsComponent extends Component {
  @service router;

  /**
   * This component is going to control the modal state (the user is going to open the modal by
   * clicking on a post).
   */
  @tracked isModalVisible = false;

  /**
   * Current page the user is on.
   */
  currentPage;

  /**
   * The contiguous segments of pages that are going to be shown to the user (check this.buildPagesSegments
   * for more information).
   */
  visiblePagesSegments = this.buildPagesSegments();

  /**
   * This method gets the current page from the query param received (if no query
   * param has been found, we are on the first page).
   */
  getCurrentPage() {
    const page = this.router.currentURL.split("=")[1];

    return page ? parseInt(page) : 1;
  }

  /**
   * This method builds the contiguous segments of pages that are going to be show
   * to the user. The component template traverses them, and for each one displays
   * all pages inside it. There are two cases:
   *
   * The user is either on the first page, or the second one, or on the last page but one, or on the last page.
   *  -> In this case, we'll show two segments of pages: [1,2]...[lastPageButOne, lastPage].
   * The user is in on another page.
   *  -> In this case, we'll show three segments of pages: [1]...[currentPage, currentPage+1]...[lastPage].
   * 
   * Why is this necessary? To achieve a responsive design.
   */
  buildPagesSegments() {
    this.currentPage = this.getCurrentPage();
    const lastPage = this.args.totalNumberOfPages;
    const lastPageButOne = lastPage - 1;

    switch (this.currentPage) {
      case 1:
      case 2:
      case lastPageButOne:
      case lastPage:
        return [[1,2], [lastPageButOne,  lastPage]];

      default:
        return [[1], [this.currentPage, this.currentPage + 1], [lastPage]];
    }
  }

  /**
   * This method redirects the user to the page they have chosen (based on the current page).
   *
   * @param valueToSum - Value to be added to the current page and produce the next one (either +1 or -1).
   */
  @action redirectToPage(valueToSum) {
    let nextPage = this.currentPage + valueToSum;
    
    // Prevents the user from going to page 0 or exceeding the number of pages.
    nextPage = Math.max(nextPage, 1);
    nextPage = Math.min(nextPage, this.args.totalNumberOfPages);

    this.router.transitionTo(
      "index",
      {
        queryParams: { page: nextPage },
      }
    );
  }

  @action toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
}
