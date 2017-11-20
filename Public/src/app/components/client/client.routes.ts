import { Routes } from '@angular/router';
import { ManageComponent } from './manage/manage.component'
import { ProfileComponent } from './profile/profile.component';
import {SearchComponent } from './search/search.component';


export const CLIENT_ROUTES: Routes = [
  { path: 'manage', component: ManageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'manage' }
];
