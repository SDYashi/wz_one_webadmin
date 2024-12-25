import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationModelsComponent } from './confirmation-models.component';

describe('ConfirmationModelsComponent', () => {
  let component: ConfirmationModelsComponent;
  let fixture: ComponentFixture<ConfirmationModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
