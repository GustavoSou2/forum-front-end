import DefaultModel from "../../../../shared/model/default.model";

export default class PostModel extends DefaultModel {
  title!: string;
  message!: string;
  has_links!: boolean;
  has_tags!: boolean;
  has_images!: boolean;
}
