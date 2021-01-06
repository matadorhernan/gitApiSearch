import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Ngrx/app.reducers';

@Component({
  selector: 'app-repo-user',
  templateUrl: './repo-user.component.html',
  styleUrls: ['./repo-user.component.css'],
})
export class RepoUserComponent implements OnInit {
  constructor(private _store: Store<AppState>) {
    this._store.select('GI')
  }

  ngOnInit(): void {}
}
