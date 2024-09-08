import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceSupplierPageComponent } from './add-service-supplier-page.component';

describe('AddServiceSupplierPageComponent', () => {
  let component: AddServiceSupplierPageComponent;
  let fixture: ComponentFixture<AddServiceSupplierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddServiceSupplierPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServiceSupplierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
