import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../../../../core/services/orders.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrderInterface } from '../../../../../../core/interfaces/purchase_order.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders-edit-form',
  templateUrl: './orders-edit-form.component.html',
  styleUrls: ['./orders-edit-form.component.css']
})
export class OrdersEditFormComponent implements OnInit {
  myForm: FormGroup;
  ordersId: string | null = null;
  editOrder: Observable<PurchaseOrderInterface> | null = null;

  constructor(
    private ordersService: OrdersService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      supplier_id: ['', Validators.required],
      emitedAt: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.ordersId = params.get('id');
      if (!this.ordersId) {
        this.router.navigate(['/dashboard/purchases/']);
      } else {
        this.editOrder = this.ordersService.getById(+this.ordersId);
        this.editOrder.subscribe(
          (order: PurchaseOrderInterface) => {
            this.myForm.patchValue({
              supplier_id: order.supplier_id,
              emitedAt: order.emitedAt
            });
          },
          error => {
            console.error(error);
            this.router.navigate(['/dashboard/purchases/']);
          }
        );
      }
    });
  }

  public onSubmit() {
    console.log(this.myForm.valid);
    if (this.myForm.valid) {
      const formValue = {
        ...this.myForm.value,
        emitedAt: new Date(this.myForm.value.emitedAt),
        supplier_id: Number(this.myForm.value.supplier_id)
      };
      console.log(formValue);
    }
  }
}
