/*add navigation with routing */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CranesComponent } from './components/view/cranes/cranes.component';
import { CraneDetailsComponent } from './components/view/crane-details/crane-details.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CraneAddComponent } from './components/view/crane-add/crane-add.component';
import { MobileCranesComponent } from './components/mobile-cranes/mobile-cranes.component';
import { ViewComponent } from './components/anotherView/view/view.component';
import { RegisterComponent } from './components/register/register.component';

import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [//how to add a path to each page
  { path: 'cranes', component: CranesComponent },
  { path: 'cranes-another-view', component: ViewComponent },
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToHome) },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'crane-add', component: CraneAddComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'crane-edit/:id', component: CraneDetailsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'mobile-cranes', component: MobileCranesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
