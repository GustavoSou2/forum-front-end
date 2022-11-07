import UserModel from "../model/user.model";
import {TokenModel} from "../model/token.model";
import {AuthenticationModel} from "../model/authentication.model";
import {Observable} from "rxjs";
import {IDefaultService} from "../../../../../shared/types/service/default-service.interface";

export interface IUserService extends IDefaultService<UserModel> {
  authentication({}: AuthenticationModel): Observable<TokenModel>;
}


