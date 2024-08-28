import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRolesComponent } from './roles/form-roles/form-roles.component';
import { HomeComponent } from './home/home.component';
import { ListRolesComponent } from './roles/list-roles/list-roles.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
