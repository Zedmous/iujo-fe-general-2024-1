import { Component } from '@angular/core';
import { SuppliersService } from '../../../../../../core/services/suppliers.service';

@Component({
  selector: 'app-supplier-add-form',
  templateUrl: './supplier-add-form.component.html',
  styleUrl: './supplier-add-form.component.css'
})
export class SupplierAddFormComponent {

  constructor( private supplierService : SuppliersService){}

  public handlesubmit(){

  }
}
