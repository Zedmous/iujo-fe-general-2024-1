import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSupplierEditFormComponent } from './service-supplier-edit-form.component';

describe('ServiceSupplierEditFormComponent', () => {
  let component: ServiceSupplierEditFormComponent;
  let fixture: ComponentFixture<ServiceSupplierEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceSupplierEditFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSupplierEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
