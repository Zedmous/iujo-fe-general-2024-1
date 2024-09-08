import { Component } from '@angular/core';
import { SuppliersService } from '../../../../../../core/services/suppliers.service';

@Component({
  selector: 'app-suppliers-edit-form',
  templateUrl: './suppliers-edit-form.component.html',
  styleUrl: './suppliers-edit-form.component.css'
})
export class SuppliersEditFormComponent {

  constructor(private suppliersServices : SuppliersService){}


}
