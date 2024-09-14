import { Component } from '@angular/core';
import { OrdersService } from '../../../../../../core/services/orders.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.css'
})
export class OrdersTableComponent {

  constructor(private ordersService : OrdersService) {

  }
}
