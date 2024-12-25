import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedbackFormComponent } from './user-feedback-form.component';

describe('UserFeedbackFormComponent', () => {
  let component: UserFeedbackFormComponent;
  let fixture: ComponentFixture<UserFeedbackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFeedbackFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
