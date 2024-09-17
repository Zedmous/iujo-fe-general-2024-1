import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersTablePageComponent } from './pages/orders/orders-table-page/orders-table-page.component';
import { AddOrdersPageComponent } from './pages/orders/add-orders-page/add-orders-page.component';
import { SupplierTablePageComponent } from './pages/suppliers/supplier-table-page/supplier-table-page.component';
import { EditOrdersPageComponent } from './pages/orders/edit-orders-page/edit-orders-page.component';
import { AddSupplierPageComponent } from './pages/suppliers/add-supplier-page/add-supplier-page.component';
import { EditSupplierPageComponent } from './pages/suppliers/edit-supplier-page/edit-supplier-page.component';
import { PurchasesComponent } from './purchases.component';
import { EditServiceSupplierPageComponent } from './pages/service_supplier/edit-service-supplier-page/edit-service-supplier-page.component';
import { AddServiceSupplierPageComponent } from './pages/service_supplier/add-service-supplier-page/add-service-supplier-page.component';
import { ServiceSupplierTablePageComponent } from './pages/service_supplier/service-supplier-table-page/service-supplier-table-page.component';
import { ServicesMonthlyReportComponent } from './pages/reports/services-monthly-report/services-monthly-report.component';


const routes: Routes = [
  {
    path: '',
    component : PurchasesComponent,
  },
  { path: 'orders',
    component: OrdersTablePageComponent,
  },
  {
    path: 'orders/add',
    component: AddOrdersPageComponent
  },
  {
    path : 'orders/edit/:id',
    component: EditOrdersPageComponent
  },
  {
    path: 'suppliers',
    component: SupplierTablePageComponent,
  },
  {
    path : 'suppliers/add',
    component : AddSupplierPageComponent
  },
  {
    path: 'suppliers/edit/:id',
    component: EditSupplierPageComponent
  },
  {
    path: 'suppliers_services',
    component: ServiceSupplierTablePageComponent
  },
  {
    path: 'suppliers_services/add',
    component: AddServiceSupplierPageComponent
  }
  ,
  {
    path: 'suppliers_services/edit/:id',
    component: EditServiceSupplierPageComponent
  },
  {
    path: 'monthlyservice',
    component : ServicesMonthlyReportComponent,
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasesRoutingModule { }
