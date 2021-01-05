import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { setUserName } from './Ngrx/GithubInformation/GithubInofrmation.actions';
import { State } from './Ngrx/GithubInformation/GithubInformation.reducer';
import { GithubApiService } from './services/GithubApi/github-api.service';
import { AppState } from './Ngrx/app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DivElementTest';
  Name$: Observable<string>;
  nombre: Observable<AppState>;
  /**
   *
   */
  constructor(private store: Store<AppState>) {
    this.Name$ = this.store.select('GI', 'userName');
  }

  ShowName() {
    this.store.dispatch(setUserName({ userName: Math.random().toString() }));
  }
}
