import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationModlesComponent } from './confirmation-modles.component';

describe('ConfirmationModlesComponent', () => {
  let component: ConfirmationModlesComponent;
  let fixture: ComponentFixture<ConfirmationModlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationModlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationModlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
