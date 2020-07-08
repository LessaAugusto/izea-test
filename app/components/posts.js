import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class PostsComponent extends Component {
  /**
   * This component is going to control the modal state (the user is going to open the modal
   * clicking on a post).
   */
  @tracked isModalVisible = false;

  /**
   * This variable basically creates an array with the size equals to the total number of pages we should
   * show. It populates this array with values from 1 to the total number of pages, like so:
   * [1,2,3,4,..., {{totalNumberOfPages}} ]
   */
   pages = Array.from(
    Array(this.args.totalNumberOfPages), (_, i) => i + 1
  );

  @action toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
}
