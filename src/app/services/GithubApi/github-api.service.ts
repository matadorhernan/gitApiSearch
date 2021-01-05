import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  EMPTY,
  Observable,
  observable,
  of,
  Subscriber,
  Subscription,
} from 'rxjs';
import { isEmpty, map } from 'rxjs/operators';
import { AppState } from 'src/app/Ngrx/app.reducers';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  private StoreSubscriber: Subscription;
  private User: any;
  constructor(private _http: HttpClient, private _store: Store<AppState>) {}

  public GetUsersFromGithub(username: string) {
    if (username !== null && username !== '') {
      const params = new HttpParams().set('q', username);
      return this._http.get(`https://api.github.com/search/users`, { params });
    }
    return EMPTY.pipe(isEmpty());
  }
}
