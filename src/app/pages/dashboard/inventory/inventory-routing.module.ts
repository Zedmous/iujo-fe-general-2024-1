import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { FormInventoryComponent } from './form-inventory/form-inventory.component';

const routes: Routes = [
  {
    path:'inventory-home',
    component: InventoryComponent
  },
  {
    path: 'form-inventory',
    component: FormInventoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
