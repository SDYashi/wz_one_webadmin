import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageChatsComponent } from './message-chats.component';

describe('MessageChatsComponent', () => {
  let component: MessageChatsComponent;
  let fixture: ComponentFixture<MessageChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageChatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
