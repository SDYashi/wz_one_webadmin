import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputModelsComponent } from './user-input-models.component';

describe('UserInputModelsComponent', () => {
  let component: UserInputModelsComponent;
  let fixture: ComponentFixture<UserInputModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInputModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInputModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
