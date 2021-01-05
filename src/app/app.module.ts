import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGithubService } from './services/AuthGithub/auth-github.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthGithubService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
