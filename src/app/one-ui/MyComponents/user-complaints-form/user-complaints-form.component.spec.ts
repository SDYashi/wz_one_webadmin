import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComplaintsFormComponent } from './user-complaints-form.component';

describe('UserComplaintsFormComponent', () => {
  let component: UserComplaintsFormComponent;
  let fixture: ComponentFixture<UserComplaintsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComplaintsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComplaintsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
