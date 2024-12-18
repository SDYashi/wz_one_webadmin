import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDashboardComponent } from './one-dashboard.component';

describe('OneDashboardComponent', () => {
  let component: OneDashboardComponent;
  let fixture: ComponentFixture<OneDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
