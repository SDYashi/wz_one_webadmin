import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExistingUsersListComponent } from './user-existing-users-list.component';

describe('UserExistingUsersListComponent', () => {
  let component: UserExistingUsersListComponent;
  let fixture: ComponentFixture<UserExistingUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserExistingUsersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserExistingUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
