import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthService } from './auth/auth.service';
import { ROUTES } from './app.routes';
import { MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { SurfwatchService } from './services/surfwatch.service';
import { SurfwatchComponent } from './surfwatch/surfwatch.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token')),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    CallbackComponent,
    SurfwatchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  // exports: [ MatMenuModule, MatIconModule ],
  providers: [
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    SurfwatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
