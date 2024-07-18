import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';


@NgModule({
  declarations: [
    RestaurantsComponent,
    ListRestaurantsComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule
  ]
})
export class RestaurantsModule { }
