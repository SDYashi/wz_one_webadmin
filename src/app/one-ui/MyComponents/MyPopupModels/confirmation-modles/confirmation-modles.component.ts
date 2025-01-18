import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-modles',
  templateUrl: './confirmation-modles.component.html',
  styleUrls: ['./confirmation-modles.component.css']
})
export class ConfirmationModlesComponent {

  @Output() confirmed = new EventEmitter<void>();
  @Output() canceled = new EventEmitter<void>();

  closeModal() {
    this.canceled.emit();
  }

  confirm() {
    this.confirmed.emit();
  }
}
