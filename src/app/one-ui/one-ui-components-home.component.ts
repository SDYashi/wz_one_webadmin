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
}
