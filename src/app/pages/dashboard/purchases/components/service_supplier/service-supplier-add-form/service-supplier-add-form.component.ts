import { Component } from '@angular/core';
import { SuppliersServicesService } from '../../../../../../core/services/suppliers-services.service';

@Component({
  selector: 'app-service-supplier-add-form',
  templateUrl: './service-supplier-add-form.component.html',
  styleUrl: './service-supplier-add-form.component.css'
})
export class ServiceSupplierAddFormComponent {

  constructor(private services_suppliersServices : SuppliersServicesService) {

  }

}
