import Model, { attr } from "@ember-data/model";

export default class UserModel extends Model {
  @attr("string") name;
  @attr("string") username;
  @attr("string") email;
  @attr address;
  @attr("string") phone;
  @attr("string") website;
  @attr company;
}
