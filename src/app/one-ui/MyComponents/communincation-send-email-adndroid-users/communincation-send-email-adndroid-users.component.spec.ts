import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunincationSendEmailAdndroidUsersComponent } from './communincation-send-email-adndroid-users.component';

describe('CommunincationSendEmailAdndroidUsersComponent', () => {
  let component: CommunincationSendEmailAdndroidUsersComponent;
  let fixture: ComponentFixture<CommunincationSendEmailAdndroidUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunincationSendEmailAdndroidUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunincationSendEmailAdndroidUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
