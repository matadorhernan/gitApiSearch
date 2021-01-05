import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  private username:string='JoseCarlosGlez'
  constructor(private _http: HttpClient) {}

  public GetUsersFromGithub() {
    return this._http.get(`https://api.github.com/users/JoseCarlosGlez`);
  }
}
