import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddoneAdminComponent } from './user-addone-admin.component';

describe('UserAddoneAdminComponent', () => {
  let component: UserAddoneAdminComponent;
  let fixture: ComponentFixture<UserAddoneAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddoneAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddoneAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
