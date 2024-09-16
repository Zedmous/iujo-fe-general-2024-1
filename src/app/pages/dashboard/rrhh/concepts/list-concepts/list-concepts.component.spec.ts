import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConceptsComponent } from './list-concepts.component';

describe('ListConceptsComponent', () => {
  let component: ListConceptsComponent;
  let fixture: ComponentFixture<ListConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListConceptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
