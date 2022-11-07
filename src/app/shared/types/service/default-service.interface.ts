import {Observable} from "rxjs";

export interface IDefaultService<T> {
  list(): Observable<T[]>;
  create(data: T): Observable<T>;
  delete(id: string):  Observable<void>;
  find(params: {}): Observable<T>;
}
