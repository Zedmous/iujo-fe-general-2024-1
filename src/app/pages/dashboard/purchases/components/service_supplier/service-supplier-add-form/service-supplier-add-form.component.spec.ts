import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSupplierAddFormComponent } from './service-supplier-add-form.component';

describe('ServiceSupplierAddFormComponent', () => {
  let component: ServiceSupplierAddFormComponent;
  let fixture: ComponentFixture<ServiceSupplierAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceSupplierAddFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSupplierAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
