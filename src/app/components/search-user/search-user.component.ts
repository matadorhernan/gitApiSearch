import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EMPTY, empty, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  pluck,
  switchMap,
  tap,
} from 'rxjs/operators';
import { IUserInformation } from 'src/app/interfaces/UserInformatio.interface';
import { UserInformation } from 'src/app/Models/User.model';
import { GithubApiService } from 'src/app/services/GithubApi/github-api.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
})
export class SearchUserComponent implements OnInit {
  constructor(private _GithubApiServices: GithubApiService) {}

  public user: FormControl;
  public UserInformation: IUserInformation[] = [];

  ngOnInit(): void {
    this.user = new FormControl('');
    this.user.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((value) =>
          this._GithubApiServices.GetUsersFromGithub(value).pipe(
            pluck('items'),
            catchError((error) => {
              if (error.status == 404) {
                return of('there isnt user with this userName, try again');
              }
            })
          )
        ),
        tap(console.log),
        map((Users: IUserInformation[]) =>
          Users != undefined
            ? (this.UserInformation = Users)
            : (this.UserInformation = [])
        )
      )
      .subscribe();
  }

  GotoRepo(repoUrl: string) {
    console.log(repoUrl);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
