import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateWorkLocationComponent } from './user-update-work-location.component';

describe('UserUpdateWorkLocationComponent', () => {
  let component: UserUpdateWorkLocationComponent;
  let fixture: ComponentFixture<UserUpdateWorkLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdateWorkLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUpdateWorkLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
