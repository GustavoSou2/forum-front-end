import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {IUserService} from "../types/services/user-service.interface";
import UserModel from "../types/model/user.model";
import {HttpClient} from "@angular/common/http";
import {AuthenticationModel} from "../types/model/authentication.model";
import {TokenModel} from "../types/model/token.model";
import {environment} from "../../../../../environments/environment";

@Injectable()
export class UserService implements IUserService {
  private readonly url: string = 'users';
  private readonly resource: string = `${environment.baseUrl}/${this.url}`;

  constructor(
    private api: HttpClient
  ) { }

  authentication(auth: AuthenticationModel): Observable<TokenModel> {
    return this.api.post<TokenModel>(`${this.resource}/login`, auth);
  }

  create(user: UserModel): Observable<UserModel> {
    return this.api.post<UserModel>(this.resource, user);
  }

  delete(id: string): Observable<void> {
    return this.api.get<void>(this.resource, { params: { id } });
  }

  find(params: {}): Observable<UserModel> {
    return this.api.get<UserModel>(this.resource, { params });
  }

  list(): Observable<UserModel[]> {
    return this.api.get<UserModel[]>(this.resource);

  }


}
