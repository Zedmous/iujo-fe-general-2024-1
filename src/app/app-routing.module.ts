import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',loadChildren:()=>import('./pages/login/login.module').then(m=>m.LoginModule)},
  {path:'dashboard',loadChildren:()=>import('./pages/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'**',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
