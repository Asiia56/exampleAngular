import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from '../../material.module';

import { CranesCardRoutingModule } from './cranes-card-routing.module';

import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

import { HighlightDirective } from 'src/app/directives/highlight.directive';
import { NgxShowOddDirective } from 'src/app/directives/ngx-show-odd.directive';

@NgModule({
  declarations: [
    FormComponent,
    DetailComponent,
    ListComponent,
    ViewComponent,
    HighlightDirective,
    NgxShowOddDirective
  ],
  imports: [
    CommonModule,
    CranesCardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ]
})
export class CranesCardModule { }
