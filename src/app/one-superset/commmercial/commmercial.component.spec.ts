import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommmercialComponent } from './commmercial.component';

describe('CommmercialComponent', () => {
  let component: CommmercialComponent;
  let fixture: ComponentFixture<CommmercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommmercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommmercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
