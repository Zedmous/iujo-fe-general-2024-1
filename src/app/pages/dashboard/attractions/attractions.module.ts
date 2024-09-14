import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttractionsRoutingModule } from './attractions-routing.module';
import { AttractionsHomeComponent } from './attractions-home/attractions-home.component';
import { AttractionsReportsComponent } from './attractions-reports/attractions-reports.component';


@NgModule({
  declarations: [
    AttractionsHomeComponent,
    AttractionsReportsComponent
  ],
  imports: [
    CommonModule,
    AttractionsRoutingModule
  ]
})
export class AttractionsModule { }
