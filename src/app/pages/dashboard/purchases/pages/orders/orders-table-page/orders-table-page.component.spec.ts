import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTablePageComponent } from './orders-table-page.component';

describe('OrdersTablePageComponent', () => {
  let component: OrdersTablePageComponent;
  let fixture: ComponentFixture<OrdersTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersTablePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
