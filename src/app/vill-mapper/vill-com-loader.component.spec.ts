import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillComLoaderComponent } from './vill-com-loader.component';

describe('VillComLoaderComponent', () => {
  let component: VillComLoaderComponent;
  let fixture: ComponentFixture<VillComLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillComLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillComLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
