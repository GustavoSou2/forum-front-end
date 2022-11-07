import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {IPostService} from "../types/services/post-service.interface";
import PostModel from "../types/model/post.model";

@Injectable()
export class PostService implements IPostService {
  private readonly url: string = 'posts';
  private readonly resource: string = `${environment.baseUrl}/${this.url}`;

  constructor(
    private api: HttpClient
  ) { }

  create(post: PostModel): Observable<PostModel> {
    return this.api.post<PostModel>(this.resource, post);
  }

  delete(id: string): Observable<void> {
    return this.api.get<void>(this.resource, { params: { id } });
  }

  find(params: {}): Observable<PostModel> {
    return this.api.get<PostModel>(this.resource, { params });
  }

  list(): Observable<PostModel[]> {
    return this.api.get<PostModel[]>(this.resource);
  }


}
