import { Component } from '@angular/core';
import { SuppliersService } from '../../../../../../core/services/suppliers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-supplier-add-form',
  templateUrl: './supplier-add-form.component.html',
  styleUrl: './supplier-add-form.component.css'
})
export class SupplierAddFormComponent {

  myForm : FormGroup;

  constructor( private supplierService : SuppliersService, private fb : FormBuilder){
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', [Validators.required, Validators.pattern('^[0-9]{1,8}$')]],
      city_id: [null, Validators.required],
      telephone: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      fiscal_address: ['', Validators.required],
      contributor: ['', Validators.required],
    });


  }

  public onSubmit(){
    console.log(this.myForm.valid)
    if (this.myForm.valid) {
      const formValues = {
        ...this.myForm.value,
        city_id: Number(this.myForm.value.city_id)
      };

      this.supplierService.set(formValues);

    }
  }
}
