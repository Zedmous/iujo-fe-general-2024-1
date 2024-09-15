import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierTablePageComponent } from './supplier-table-page.component';

describe('SupplierTablePageComponent', () => {
  let component: SupplierTablePageComponent;
  let fixture: ComponentFixture<SupplierTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierTablePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
