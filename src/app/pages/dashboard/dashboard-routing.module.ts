import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path:'',component:HomeComponent},
      {path:'roles',loadChildren:()=>import('./generals/generals.module').then(x=>x.GeneralsModule)},
      //{path:'personas',loadChildren:()=>import('./personas/personas.module').then(x=>x.PersonasModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
