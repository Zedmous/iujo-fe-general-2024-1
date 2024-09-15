import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSupplierPageComponent } from './edit-supplier-page.component';

describe('EditSupplierPageComponent', () => {
  let component: EditSupplierPageComponent;
  let fixture: ComponentFixture<EditSupplierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSupplierPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSupplierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
