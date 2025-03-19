import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillMappingComponent } from './vill-mapping.component';

describe('VillMappingComponent', () => {
  let component: VillMappingComponent;
  let fixture: ComponentFixture<VillMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
