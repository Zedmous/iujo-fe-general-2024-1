import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMonthlyReportComponent } from './services-monthly-report.component';

describe('ServicesMonthlyReportComponent', () => {
  let component: ServicesMonthlyReportComponent;
  let fixture: ComponentFixture<ServicesMonthlyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesMonthlyReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesMonthlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
