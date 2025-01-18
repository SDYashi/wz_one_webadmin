import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddAdminUserInforComponent } from './user-add-admin-user-infor.component';

describe('UserAddAdminUserInforComponent', () => {
  let component: UserAddAdminUserInforComponent;
  let fixture: ComponentFixture<UserAddAdminUserInforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddAdminUserInforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddAdminUserInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
