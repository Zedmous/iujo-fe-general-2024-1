import { Component } from '@angular/core';
import { OrdersService } from '../../../../../../core/services/orders.service';

@Component({
  selector: 'app-orders-edit-form',
  templateUrl: './orders-edit-form.component.html',
  styleUrl: './orders-edit-form.component.css'
})
export class OrdersEditFormComponent {

  constructor(private ordersService : OrdersService) {

  }
}
