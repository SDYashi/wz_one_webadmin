import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneUiComponentsHomeComponent } from './one-ui-components-home.component';

describe('OneUiComponentsHomeComponent', () => {
  let component: OneUiComponentsHomeComponent;
  let fixture: ComponentFixture<OneUiComponentsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneUiComponentsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneUiComponentsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
