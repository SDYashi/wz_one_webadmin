import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedAddNewAppComponent } from './integrated-add-new-app.component';

describe('IntegratedAddNewAppComponent', () => {
  let component: IntegratedAddNewAppComponent;
  let fixture: ComponentFixture<IntegratedAddNewAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegratedAddNewAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegratedAddNewAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
