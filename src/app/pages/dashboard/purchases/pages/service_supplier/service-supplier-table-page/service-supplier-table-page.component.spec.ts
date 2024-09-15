import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSupplierTablePageComponent } from './service-supplier-table-page.component';

describe('ServiceSupplierTablePageComponent', () => {
  let component: ServiceSupplierTablePageComponent;
  let fixture: ComponentFixture<ServiceSupplierTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceSupplierTablePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSupplierTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
