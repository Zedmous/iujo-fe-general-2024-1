import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsHomeComponent } from './hotels-home/hotels-home.component';
import { HotelsReportsComponent } from './hotels-reports/hotels-reports.component';


@NgModule({
  declarations: [
    HotelsHomeComponent,
    HotelsReportsComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule
  ]
})
export class HotelsModule { }
