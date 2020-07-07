import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { A } from "@ember/array";

export default class PostsComponent extends Component {
  array = A([1,2,3,4,5]);
  @tracked isModalVisible = false;

  @action toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
}
