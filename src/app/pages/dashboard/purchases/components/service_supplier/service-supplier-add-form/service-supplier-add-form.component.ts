import { Component } from '@angular/core';
import { SuppliersServicesService } from '../../../../../../core/services/suppliers-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-supplier-add-form',
  templateUrl: './service-supplier-add-form.component.html',
  styleUrl: './service-supplier-add-form.component.css'
})
export class ServiceSupplierAddFormComponent {

  myForm : FormGroup;
  constructor(private services_suppliersServices : SuppliersServicesService, private fb : FormBuilder){
    this.myForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      fecha: ['', Validators.required],
      documento: ['', Validators.required],
      tipoDocumento: ['', Validators.required]
    });


  }

  public onSubmit(){
    console.log(this.myForm.valid)
    if (this.myForm.valid) {
      console.log(this.myForm.value);

    }
  }
}


