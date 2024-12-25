import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedAddNewNotifyStatusComponent } from './integrated-add-new-notify-status.component';

describe('IntegratedAddNewNotifyStatusComponent', () => {
  let component: IntegratedAddNewNotifyStatusComponent;
  let fixture: ComponentFixture<IntegratedAddNewNotifyStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegratedAddNewNotifyStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegratedAddNewNotifyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
