import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersetLoaderHomeComponent } from './superset-loader-home.component';

describe('SupersetLoaderHomeComponent', () => {
  let component: SupersetLoaderHomeComponent;
  let fixture: ComponentFixture<SupersetLoaderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupersetLoaderHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupersetLoaderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
