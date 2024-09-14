import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../../../../../core/services/suppliers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierInterface } from '../../../../../../core/interfaces/supplier.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-suppliers-edit-form',
  templateUrl: './suppliers-edit-form.component.html',
  styleUrls: ['./suppliers-edit-form.component.css']
})
export class SuppliersEditFormComponent implements OnInit {
  myForm: FormGroup;
  supplierId: string | null = null;
  supplierEdit: Observable<SupplierInterface> | null = null;

  constructor(
    private supplierService: SuppliersService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', [Validators.required, Validators.pattern('^[0-9]{1,8}$')]],
      city_id: [null, Validators.required],
      telephone: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      fiscal_address: ['', Validators.required],
      contributor: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.supplierId = params.get('id');
      if (!this.supplierId) {
        this.router.navigate(['/dashboard/purchases/suppliers']);
      } else {
        this.supplierEdit = this.supplierService.getById(+this.supplierId);
        this.supplierEdit.subscribe(
          (supplier: SupplierInterface) => {
            this.myForm.patchValue(supplier);
          },
          error => {
            this.router.navigate(['/dashboard/purchases/suppliers']);
          }
        );
      }
    });
  }

  public onSubmit() {
    console.log(this.myForm.valid);
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}
