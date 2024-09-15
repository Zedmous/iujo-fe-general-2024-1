import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsHomeComponent } from './hotels-home/hotels-home.component';
import { HotelsReportsComponent } from './hotels-reports/hotels-reports.component';
import { ListRoomTypesComponent } from './room_types/list-room-types/list-room-types.component';
import { FormRoomTypesComponent } from './room_types/form-room-types/form-room-types.component';


@NgModule({
  declarations: [
    HotelsHomeComponent,
    HotelsReportsComponent,
    ListRoomTypesComponent,
    FormRoomTypesComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule
  ]
})
export class HotelsModule { }
