import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierAddFormComponent } from './supplier-add-form.component';

describe('SupplierAddFormComponent', () => {
  let component: SupplierAddFormComponent;
  let fixture: ComponentFixture<SupplierAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierAddFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
