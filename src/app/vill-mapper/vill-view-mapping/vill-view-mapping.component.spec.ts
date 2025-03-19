import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillViewMappingComponent } from './vill-view-mapping.component';

describe('VillViewMappingComponent', () => {
  let component: VillViewMappingComponent;
  let fixture: ComponentFixture<VillViewMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillViewMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillViewMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
