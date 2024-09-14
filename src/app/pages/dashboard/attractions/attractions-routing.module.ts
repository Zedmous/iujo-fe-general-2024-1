import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttractionsHomeComponent } from './attractions-home/attractions-home.component';
import { AttractionsReportsComponent } from './attractions-reports/attractions-reports.component';

const routes: Routes = [
  { path: '', component: AttractionsHomeComponent },
  {
    path: 'reports',
    component: AttractionsReportsComponent,
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttractionsRoutingModule { }

