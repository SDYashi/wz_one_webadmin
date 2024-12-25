import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertModelsComponent } from './alert-models.component';

describe('AlertModelsComponent', () => {
  let component: AlertModelsComponent;
  let fixture: ComponentFixture<AlertModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
