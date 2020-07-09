import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class PostsComponent extends Component {
  /**
   * This component is going to control the modal state (the user is going to open the modal by
   * clicking on a post).
   */
  @tracked isModalVisible = false;

  @action toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
}
