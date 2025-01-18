import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-ui-components-home',
  templateUrl: './one-ui-components-home.component.html',
  styleUrls: ['./one-ui-components-home.component.css']
})
export class OneUiComponentsHomeComponent {
  constructor(private router:Router){}
  logout(){    
    localStorage.removeItem('access_token');
    this.router.navigate(['one-login']);
}
}
