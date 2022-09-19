/*add navigation with routing */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CranesComponent } from './components/cranes/cranes.component';
import { CraneDetailsComponent } from './components/crane-details/crane-details.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CraneAddComponent } from './components/crane-add/crane-add.component';
import { MobileCranesComponent } from './components/mobile-cranes/mobile-cranes.component';

const routes: Routes = [//how to add a path to each page
  {path: 'cranes', component: CranesComponent},
  //{path: 'details/:id', component: CraneDetailsComponent},//if you want details on diff.page
  {path: 'login', component: LoginComponent},  
  {path: 'dashboard', component: DashboardComponent}, 
  {path: 'crane-add', component: CraneAddComponent},
  {path: 'mobile-cranes', component: MobileCranesComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //initial page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
