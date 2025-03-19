import { Component } from '@angular/core';

@Component({
  selector: 'app-vill-com-loader',
  templateUrl: './vill-com-loader.component.html',
  styleUrls: ['./vill-com-loader.component.css']
})
export class VillComLoaderComponent {

  isSidebarOpen: boolean = true; 
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
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

