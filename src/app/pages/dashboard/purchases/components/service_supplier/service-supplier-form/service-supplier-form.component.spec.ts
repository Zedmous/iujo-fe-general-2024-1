import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSupplierFormComponent } from './service-supplier-form.component';

describe('ServiceSupplierFormComponent', () => {
  let component: ServiceSupplierFormComponent;
  let fixture: ComponentFixture<ServiceSupplierFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceSupplierFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSupplierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
