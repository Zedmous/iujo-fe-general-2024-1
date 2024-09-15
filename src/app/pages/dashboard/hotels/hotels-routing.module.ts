import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsHomeComponent } from './hotels-home/hotels-home.component';
import { HotelsReportsComponent } from './hotels-reports/hotels-reports.component';

const routes: Routes = [
  { path: '', component: HotelsHomeComponent },
  {
    path: 'reports',
    component: HotelsReportsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
