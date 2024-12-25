import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageMessageComponent } from './message-message.component';

describe('MessageMessageComponent', () => {
  let component: MessageMessageComponent;
  let fixture: ComponentFixture<MessageMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
