import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { forkJoin } from 'rxjs';
import {
  last,
  map,
  mergeMap,
  shareReplay,
  skip,
  takeLast,
} from 'rxjs/operators';
import { RepoInformation } from 'src/app/Models/Repo.model';
import { UserInformation } from 'src/app/Models/User.model';
import { unsetRepoUser } from 'src/app/Ngrx/Actions/RepoInformation.actions';
import { AppState } from 'src/app/Ngrx/app.reducers';

@Component({
  selector: 'app-repo-user',
  templateUrl: './repo-user.component.html',
  styleUrls: ['./repo-user.component.css'],
})
export class RepoUserComponent implements OnDestroy {
  public reposList: RepoInformation[] = undefined;
  public  user:UserInformation=undefined;
  constructor(private _store: Store<AppState>, private _router: Router) {
    this._store
      .select('RI')
      .pipe(
        map((repos) => {
          this.reposList = repos;
        }),
        mergeMap(() => this._store.select('GI').pipe(map(user=>this.user=user)))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._store.dispatch(unsetRepoUser());
  }
}
