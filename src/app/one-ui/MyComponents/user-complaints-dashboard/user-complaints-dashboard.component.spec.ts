import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComplaintsDashboardComponent } from './user-complaints-dashboard.component';

describe('UserComplaintsDashboardComponent', () => {
  let component: UserComplaintsDashboardComponent;
  let fixture: ComponentFixture<UserComplaintsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComplaintsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComplaintsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
