import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';
import { CranesComponent } from './cranes/cranes.component';
import { CraneAddComponent } from './crane-add/crane-add.component';
import { CraneEditComponent } from './crane-edit/crane-edit.component';
import { ConfirmExitGuard } from 'src/app/services/confirm-exit.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CranesComponent },
  { path: 'add', component: CraneAddComponent, ...canActivate(redirectUnauthorizedToLogin), canDeactivate: [ConfirmExitGuard]},
  { path: 'edit/:id', component: CraneEditComponent, ...canActivate(redirectUnauthorizedToLogin) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ConfirmExitGuard]
})
export class CraneTableRouting { }
