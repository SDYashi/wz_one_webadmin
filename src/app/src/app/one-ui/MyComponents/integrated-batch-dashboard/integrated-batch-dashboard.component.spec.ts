import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedBatchDashboardComponent } from './integrated-batch-dashboard.component';

describe('IntegratedBatchDashboardComponent', () => {
  let component: IntegratedBatchDashboardComponent;
  let fixture: ComponentFixture<IntegratedBatchDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegratedBatchDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegratedBatchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
