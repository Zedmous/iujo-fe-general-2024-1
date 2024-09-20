import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RrhhRoutingModule } from './rrhh-routing.module';
import { RrhhHomeComponent } from './rrhh-home/rrhh-home.component';
import { RrhhReportsComponent } from './rrhh-reports/rrhh-reports.component';
import { ConceptComponent } from './concept/concept.component';
import { ListConceptComponent } from './concept/list-concept/list-concept.component';
import { FormConceptComponent } from './concept/form-concept/form-concept.component';


@NgModule({
  declarations: [
    RrhhHomeComponent,
    RrhhReportsComponent,
    ConceptComponent,
    ListConceptComponent,
    ConceptComponent,
    FormConceptComponent
  ],
  imports: [
    CommonModule,
    RrhhRoutingModule
  ]
})
export class RrhhModule { }
