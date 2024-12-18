import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLoginComponent } from './one-login.component';

describe('OneLoginComponent', () => {
  let component: OneLoginComponent;
  let fixture: ComponentFixture<OneLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
