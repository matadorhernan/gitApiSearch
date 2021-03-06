import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGithubService } from './services/AuthGithub/auth-github.service';
import { NgrxModule } from './Ngrx/ngrx.module';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app.routing.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgrxModule,
    ComponentsModule,
    AppRoutingModule
  ],
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
