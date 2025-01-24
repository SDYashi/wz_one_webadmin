import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunincationSendSMSAdndroidUsersComponent } from './communincation-send-smsadndroid-users.component';

describe('CommunincationSendSMSAdndroidUsersComponent', () => {
  let component: CommunincationSendSMSAdndroidUsersComponent;
  let fixture: ComponentFixture<CommunincationSendSMSAdndroidUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunincationSendSMSAdndroidUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunincationSendSMSAdndroidUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
