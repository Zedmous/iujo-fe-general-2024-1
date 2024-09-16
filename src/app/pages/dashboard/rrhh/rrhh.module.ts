import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RrhhRoutingModule } from './rrhh-routing.module';
import { RrhhComponent } from './rrhh.component';
import { ListConceptsComponent } from './concepts/list-concepts/list-concepts.component';
import { FormConceptsComponent } from './concepts/form-concepts/form-concepts.component';



@NgModule({
  declarations: [
    RrhhComponent,
    ListConceptsComponent,
    FormConceptsComponent
  ],
  imports: [
    CommonModule,
    RrhhRoutingModule
  ]
})
export class RrhhModule { }
