import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
import { SurfwatchComponent } from './surfwatch/surfwatch.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'surfwatch', component: SurfwatchComponent },
  { path: '**', redirectTo: '' }
];
