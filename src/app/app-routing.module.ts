/*add navigation with routing */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MobileCranesComponent } from './components/mobile-cranes/mobile-cranes.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
import { CanLoadAuthGuard } from './services/can-load.service';
import { CustomPreloadingStrategy } from './services/custom-preloading.strategy';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [//how to add a path to each page

  //cranes (table-view)

  { path: "cranes-table-view", loadChildren: () => import('./components/tableView/cranes-table.module').then(m => m.CraneTableModule),
    canLoad:[CanLoadAuthGuard]},

  //cranes (card-view)
  //{ path: 'cranes-card-view', component: ViewComponent },
  { path: "cranes-card-view", loadChildren: () => import('./components/cardView/cranes-card.module').then(m => m.CranesCardModule),
  //canLoad:[CanLoadAuthGuard], <- comment canLoad as this guard prevent from loading if the user is not authorised, so custom preloading strategy won't work
  data: {
    preload: true
 }},

  //auth
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToHome) },
  { path: 'register', component: RegisterComponent },

  //basics
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mobile-cranes', component: MobileCranesComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/cranes-card-view', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy
  })],
  exports: [RouterModule],
  providers: [CanLoadAuthGuard, CustomPreloadingStrategy]
})
export class AppRoutingModule { }
