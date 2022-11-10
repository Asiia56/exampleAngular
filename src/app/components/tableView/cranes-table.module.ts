import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CraneTableRouting } from './cranes-table-routing.module';
import { CranesComponent } from './cranes/cranes.component';
import { CraneAddComponent } from './crane-add/crane-add.component';
import { CraneEditComponent } from './crane-edit/crane-edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from '../../material.module';

@NgModule({
  declarations: [
    CranesComponent,
    CraneAddComponent,
    CraneEditComponent,
  ],
  imports: [
    CommonModule,
    CraneTableRouting,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: []
})
export class CraneTableModule { }
