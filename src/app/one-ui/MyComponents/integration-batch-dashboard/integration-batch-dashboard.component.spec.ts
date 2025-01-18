import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationBatchDashboardComponent } from './integration-batch-dashboard.component';

describe('IntegrationBatchDashboardComponent', () => {
  let component: IntegrationBatchDashboardComponent;
  let fixture: ComponentFixture<IntegrationBatchDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationBatchDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationBatchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
