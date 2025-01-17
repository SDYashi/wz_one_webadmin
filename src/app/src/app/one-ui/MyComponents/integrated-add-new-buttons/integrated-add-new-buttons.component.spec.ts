import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedAddNewButtonsComponent } from './integrated-add-new-buttons.component';

describe('IntegratedAddNewButtonsComponent', () => {
  let component: IntegratedAddNewButtonsComponent;
  let fixture: ComponentFixture<IntegratedAddNewButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegratedAddNewButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegratedAddNewButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
