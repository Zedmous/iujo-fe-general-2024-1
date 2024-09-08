import { Component } from '@angular/core';
import { SuppliersServicesService } from '../../../../../../core/services/suppliers-services.service';

@Component({
  selector: 'app-service-supplier-edit-form',
  templateUrl: './service-supplier-edit-form.component.html',
  styleUrl: './service-supplier-edit-form.component.css'
})
export class ServiceSupplierEditFormComponent {

  constructor(private services_suppliersServices : SuppliersServicesService){}

}
