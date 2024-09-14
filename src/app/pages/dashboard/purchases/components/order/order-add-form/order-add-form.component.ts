import { Component } from '@angular/core';
import { OrdersService } from '../../../../../../core/services/orders.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-add-form',
  templateUrl: './order-add-form.component.html',
  styleUrl: './order-add-form.component.css'
})
export class OrderAddFormComponent {

  myForm : FormGroup;

  constructor(private ordersService : OrdersService, private fb : FormBuilder){
    this.myForm = this.fb.group({
      supplier_id : ['', Validators.required],
      emitedAt : ['', Validators.required]
    });
  }

  public onSubmit(){
    console.log(this.myForm.valid)
    if (this.myForm.valid) {
      const formValue = {
        ...this.myForm.value,
        emitedAt: new Date(this.myForm.value.emitedAt),
        supplier_id: Number(this.myForm.value.supplier_id) // Convertir a número
    };
    console.log(formValue);
    }
  }
}
