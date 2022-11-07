import DefaultModel from "../../../../shared/model/default.model";

export default class UserModel extends DefaultModel {
  username!: string;
  email!: string;
  password!: string;
  hasDetails?: boolean = false;
}
