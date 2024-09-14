import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './purchases.component';
import { SupplierAddFormComponent } from './components/supplier/supplier-add-form/supplier-add-form.component';


import { OrderAddFormComponent } from './components/order/order-add-form/order-add-form.component';

import { PurchasesRoutingModule } from './purchases-routing.module';
import { SuppliersTableComponent } from './components/supplier/suppliers-table/suppliers-table.component';
import { OrdersTableComponent } from './components/order/orders-table/orders-table.component';
import { OrdersEditFormComponent } from './components/order/orders-edit-form/orders-edit-form.component';
import { SuppliersEditFormComponent } from './components/supplier/suppliers-edit-form/suppliers-edit-form.component';
import { EditOrdersPageComponent } from './pages/orders/edit-orders-page/edit-orders-page.component';
import { AddOrdersPageComponent } from './pages/orders/add-orders-page/add-orders-page.component';

import { AddSupplierPageComponent } from './pages/suppliers/add-supplier-page/add-supplier-page.component';
import { SupplierTablePageComponent } from './pages/suppliers/supplier-table-page/supplier-table-page.component';
import { EditSupplierPageComponent } from './pages/suppliers/edit-supplier-page/edit-supplier-page.component';
import { ServiceSupplierAddFormComponent } from './components/service_supplier/service-supplier-add-form/service-supplier-add-form.component';
import { ServiceSupplierEditFormComponent } from './components/service_supplier/service-supplier-edit-form/service-supplier-edit-form.component';

import { AddServiceSupplierPageComponent } from './pages/service_supplier/add-service-supplier-page/add-service-supplier-page.component';
import { EditServiceSupplierPageComponent } from './pages/service_supplier/edit-service-supplier-page/edit-service-supplier-page.component';
import { ServiceSupplierTablePageComponent } from './pages/service_supplier/service-supplier-table-page/service-supplier-table-page.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    PurchasesComponent,
    SupplierAddFormComponent,
    OrderAddFormComponent,
    SuppliersTableComponent,
    OrdersTableComponent,
    OrdersEditFormComponent,
    SuppliersEditFormComponent,
    EditOrdersPageComponent,
    AddOrdersPageComponent,
    AddSupplierPageComponent,
    SupplierTablePageComponent,
    EditSupplierPageComponent,
    ServiceSupplierAddFormComponent,
    ServiceSupplierEditFormComponent,
    AddServiceSupplierPageComponent,
    EditServiceSupplierPageComponent,
    ServiceSupplierTablePageComponent,

  ],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PurchasesModule { }
