import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationBatchCreateAndroidUsersComponent } from './integration-batch-create-android-users.component';

describe('IntegrationBatchCreateAndroidUsersComponent', () => {
  let component: IntegrationBatchCreateAndroidUsersComponent;
  let fixture: ComponentFixture<IntegrationBatchCreateAndroidUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationBatchCreateAndroidUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationBatchCreateAndroidUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
