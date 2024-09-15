import { Component } from '@angular/core';
import { OrdersService } from '../../../../../../core/services/orders.service';
import { PurchaseOrderInterface } from '../../../../../../core/interfaces/purchase_order.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.css'
})
export class OrdersTableComponent {

  orders: Observable<PurchaseOrderInterface[]> | undefined;


  constructor(
    private ordersService : OrdersService,
    private router : Router
  ) {

  }

  ngOnInit() {
    this.orders = this.ordersService.get();
  }

  public editOrder(id : PurchaseOrderInterface["id"]){
    this.router.navigate(['/dashboard/purchases/orders/edit/', id]);
  }

  public deleteOrder(id : PurchaseOrderInterface["id"]){
    this.ordersService.delete(+id!);
    location.reload();
  }
}
