import { RrhhHomeComponent } from './rrhh-home/rrhh-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormConceptComponent } from './concept/form-concept/form-concept.component';
import { ListConceptComponent } from './concept/list-concept/list-concept.component';

const routes: Routes = [
  { path: '', component: RrhhHomeComponent },
  {
    path: 'concept',
    component: ListConceptComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RrhhRoutingModule { }
