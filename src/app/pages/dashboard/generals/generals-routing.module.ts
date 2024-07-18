import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRolesComponent } from './list-roles/list-roles.component';
import { FormRolesComponent } from './form-roles/form-roles.component';

const routes: Routes = [
  {
    path: '', component: ListRolesComponent
  },
  {
    path: 'crear-role', component: FormRolesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralsRoutingModule { }
