import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateSecretKeyforAppComponent } from './user-update-secret-keyfor-app.component';

describe('UserUpdateSecretKeyforAppComponent', () => {
  let component: UserUpdateSecretKeyforAppComponent;
  let fixture: ComponentFixture<UserUpdateSecretKeyforAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdateSecretKeyforAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUpdateSecretKeyforAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
