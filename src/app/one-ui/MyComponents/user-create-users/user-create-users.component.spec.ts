import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateUsersComponent } from './user-create-users.component';

describe('UserCreateUsersComponent', () => {
  let component: UserCreateUsersComponent;
  let fixture: ComponentFixture<UserCreateUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
