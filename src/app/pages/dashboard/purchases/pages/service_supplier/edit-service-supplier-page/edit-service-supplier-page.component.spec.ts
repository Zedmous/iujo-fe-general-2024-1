import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceSupplierPageComponent } from './edit-service-supplier-page.component';

describe('EditServiceSupplierPageComponent', () => {
  let component: EditServiceSupplierPageComponent;
  let fixture: ComponentFixture<EditServiceSupplierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditServiceSupplierPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditServiceSupplierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
