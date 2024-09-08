import { Component } from '@angular/core';
import { OrdersService } from '../../../../../../core/services/orders.service';

@Component({
  selector: 'app-order-add-form',
  templateUrl: './order-add-form.component.html',
  styleUrl: './order-add-form.component.css'
})
export class OrderAddFormComponent {

  constructor(private ordersService : OrdersService) {

  }
}
