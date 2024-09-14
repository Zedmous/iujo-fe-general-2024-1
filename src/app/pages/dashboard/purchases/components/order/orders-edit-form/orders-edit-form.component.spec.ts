import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersEditFormComponent } from './orders-edit-form.component';

describe('OrdersEditFormComponent', () => {
  let component: OrdersEditFormComponent;
  let fixture: ComponentFixture<OrdersEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersEditFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
