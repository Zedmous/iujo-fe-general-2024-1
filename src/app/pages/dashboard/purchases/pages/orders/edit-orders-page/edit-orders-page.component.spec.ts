import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrdersPageComponent } from './edit-orders-page.component';

describe('EditOrdersPageComponent', () => {
  let component: EditOrdersPageComponent;
  let fixture: ComponentFixture<EditOrdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditOrdersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
