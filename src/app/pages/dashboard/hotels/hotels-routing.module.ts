import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsHomeComponent } from './hotels-home/hotels-home.component';
import { HotelsReportsComponent } from './hotels-reports/hotels-reports.component';
import { ListRolesComponent } from '../generals/roles/list-roles/list-roles.component';
import { ListRoomTypesComponent } from './room_types/list-room-types/list-room-types.component';

const routes: Routes = [
  { path: '', component: HotelsHomeComponent },
  {
    path: 'reports',
    component: HotelsReportsComponent,
  },
  {
    path: 'room-types',
    component: ListRoomTypesComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
