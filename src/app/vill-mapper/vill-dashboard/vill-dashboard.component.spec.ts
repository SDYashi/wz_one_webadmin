import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillDashboardComponent } from './vill-dashboard.component';

describe('VillDashboardComponent', () => {
  let component: VillDashboardComponent;
  let fixture: ComponentFixture<VillDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
