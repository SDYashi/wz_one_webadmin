import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationBatchFetchUsersfromPowerbiComponent } from './integration-batch-fetch-usersfrom-powerbi.component';

describe('IntegrationBatchFetchUsersfromPowerbiComponent', () => {
  let component: IntegrationBatchFetchUsersfromPowerbiComponent;
  let fixture: ComponentFixture<IntegrationBatchFetchUsersfromPowerbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationBatchFetchUsersfromPowerbiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationBatchFetchUsersfromPowerbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
