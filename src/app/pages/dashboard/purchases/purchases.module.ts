import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './purchases.component';
import { SupplierAddFormComponent } from './components/supplier/supplier-add-form/supplier-add-form.component';
import { SupplierFormComponent } from './components/supplier/supplier-form/supplier-form.component';
import { OrderFormComponent } from './components/order/order-form/order-form.component';
import { OrderAddFormComponent } from './components/order/order-add-form/order-add-form.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';
import { PurchasesRoutingModule } from './purchases-routing.module';



@NgModule({
  declarations: [
    PurchasesComponent,
    SupplierAddFormComponent,
    SupplierFormComponent,
    OrderFormComponent,
    OrderAddFormComponent,
    OrdersComponent,
    SuppliersComponent
  ],
  imports: [
    CommonModule,
    PurchasesRoutingModule
  ]
})
export class PurchasesModule { }
