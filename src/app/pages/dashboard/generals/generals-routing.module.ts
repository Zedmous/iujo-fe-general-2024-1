import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRolesComponent } from './roles/form-roles/form-roles.component';
import { GeneralsHomeComponent } from './generals-home/generals-home.component';
import { ListRolesComponent } from './roles/list-roles/list-roles.component';

const routes: Routes = [
  { path: '', component: GeneralsHomeComponent },
  {
    path: 'roles',
    component: ListRolesComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralsRoutingModule {}
