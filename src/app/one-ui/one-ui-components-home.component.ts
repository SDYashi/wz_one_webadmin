import { Component } from '@angular/core';

@Component({
  selector: 'app-one-ui-components-home',
  templateUrl: './one-ui-components-home.component.html',
  styleUrls: ['./one-ui-components-home.component.css']
})
export class OneUiComponentsHomeComponent {
  toggleSidebar() {
    const sidebar = document.getElementById('accordionSidebar') as HTMLElement;
    sidebar.classList.toggle('toggled');
  }

  public username: string = '';
  public sessionTimer: number = 0;

  constructor() {
    this.username = localStorage.getItem('username') || '';
    const sessionTimerValue = localStorage.getItem('sessionTimer');
    if (sessionTimerValue) {
      this.sessionTimer = parseInt(sessionTimerValue, 10);
      this.startSessionTimer();
    }
  }

  private startSessionTimer() {
    setInterval(() => {
      this.sessionTimer--;
      localStorage.setItem('sessionTimer', this.sessionTimer.toString());
      if (this.sessionTimer <= 0) {
        localStorage.removeItem('sessionTimer');
        localStorage.removeItem('username');
        this.username = '';
      }
    }, 1000);
  }
}
