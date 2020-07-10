import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class PostsComponent extends Component {
  /**
   * This component is going to control the modal state (the user is going to open the modal by
   * clicking on a post).
   */
  @tracked isModalVisible = false;

  /**
   * This is the data of the post selected by the user (including the user who
   * created the post).
   */
  @tracked modalPostData = {};

  @action openModal(selectedPost) {
    this.modalPostData = selectedPost;
    this.isModalVisible = true;
  }

  @action closeModal() {
    this.isModalVisible = false;
  }
}
