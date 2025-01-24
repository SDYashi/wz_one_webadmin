import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunincationSendSMSAdminUsersComponent } from './communincation-send-smsadmin-users.component';

describe('CommunincationSendSMSAdminUsersComponent', () => {
  let component: CommunincationSendSMSAdminUsersComponent;
  let fixture: ComponentFixture<CommunincationSendSMSAdminUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunincationSendSMSAdminUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunincationSendSMSAdminUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
