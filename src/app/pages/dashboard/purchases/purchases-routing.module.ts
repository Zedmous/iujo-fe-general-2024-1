import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './pages/orders/orders.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  {
    path: 'suppliers',
    component: SuppliersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasesRoutingModule { }
