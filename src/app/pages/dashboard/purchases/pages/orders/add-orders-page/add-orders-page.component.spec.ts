import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrdersPageComponent } from './add-orders-page.component';

describe('AddOrdersPageComponent', () => {
  let component: AddOrdersPageComponent;
  let fixture: ComponentFixture<AddOrdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOrdersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
