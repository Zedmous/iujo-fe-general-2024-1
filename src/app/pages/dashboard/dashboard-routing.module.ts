import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path:'',component:HomeComponent},
      {path:'generals',loadChildren:()=>import('./generals/generals.module').then(x=>x.GeneralsModule)},
      {path:'sales',loadChildren:()=>import('./sales/sales.module').then(x=>x.SalesModule)},
      {path:'restaurants',loadChildren:()=>import('./restaurants/restaurants.module').then(x=>x.RestaurantsModule)},
      {path:'inventory',loadChildren:()=>import('./inventory/inventory.module').then(x=>x.InventoryModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
