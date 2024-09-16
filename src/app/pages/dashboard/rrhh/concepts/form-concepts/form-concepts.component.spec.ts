import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConceptsComponent } from './form-concepts.component';

describe('FormConceptsComponent', () => {
  let component: FormConceptsComponent;
  let fixture: ComponentFixture<FormConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormConceptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
