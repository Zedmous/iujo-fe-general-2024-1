import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrhhHomeComponent } from './rrhh-home.component';

describe('RrhhHomeComponent', () => {
  let component: RrhhHomeComponent;
  let fixture: ComponentFixture<RrhhHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RrhhHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RrhhHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
