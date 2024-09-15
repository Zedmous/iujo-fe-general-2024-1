import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../../../../../core/services/suppliers.service';
import { SupplierInterface } from '../../../../../../core/interfaces/supplier.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppliers-table',
  templateUrl: './suppliers-table.component.html',
  styleUrls: ['./suppliers-table.component.css']
})
export class SuppliersTableComponent implements OnInit {

  suppliers: Observable<SupplierInterface[]> | undefined;

  constructor(
    private supplierServices: SuppliersService,
    private router : Router
  ) {}

  ngOnInit() {
    this.suppliers = this.supplierServices.get();
  }

  public editSupplier(id : SupplierInterface["id"]){
    this.router.navigate(['/dashboard/purchases/suppliers/edit/', id]);
  }

  public deleteSupplier(id : SupplierInterface["id"]){
    this.supplierServices.delete(+id!);
    location.reload();
  }
}
