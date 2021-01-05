import { Component } from '@angular/core';
import { GithubApiService } from './services/GithubApi/github-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DivElementTest';

  /**
   *
   */
  constructor(private _githubservices: GithubApiService) {
    this._githubservices.GetUsersFromGithub().subscribe(console.log);
  }
}
