import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComplaintsViewComponent } from './user-complaints-view.component';

describe('UserComplaintsViewComponent', () => {
  let component: UserComplaintsViewComponent;
  let fixture: ComponentFixture<UserComplaintsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComplaintsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComplaintsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
