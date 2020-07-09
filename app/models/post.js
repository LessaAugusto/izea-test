import Model, { attr, belongsTo } from "@ember-data/model";
import { alias } from "@ember/object/computed";

export default class PostModel extends Model {
  @belongsTo("user") userId;
  @alias("userId") user;
  @attr("string") title;
  @attr("string") body;
}