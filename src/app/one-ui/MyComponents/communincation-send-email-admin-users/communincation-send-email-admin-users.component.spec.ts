import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunincationSendEmailAdminUsersComponent } from './communincation-send-email-admin-users.component';

describe('CommunincationSendEmailAdminUsersComponent', () => {
  let component: CommunincationSendEmailAdminUsersComponent;
  let fixture: ComponentFixture<CommunincationSendEmailAdminUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunincationSendEmailAdminUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunincationSendEmailAdminUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
