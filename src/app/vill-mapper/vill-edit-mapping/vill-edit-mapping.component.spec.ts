import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillEditMappingComponent } from './vill-edit-mapping.component';

describe('VillEditMappingComponent', () => {
  let component: VillEditMappingComponent;
  let fixture: ComponentFixture<VillEditMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillEditMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillEditMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
