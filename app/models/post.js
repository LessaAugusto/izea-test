import Model, { attr, belongsTo } from "@ember-data/model";

export default class PostModel extends Model {
  @belongsTo("user") userId;
  @attr("string") title;
  @attr("string") body;
}