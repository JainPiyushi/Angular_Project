import { Component } from '@angular/core';
import { AuthGuard } from '../services/authorization/auth-guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // loginStatus: string | any;

  // constructor(authGuard: AuthGuard) {
  //   this.loginStatus = localStorage.getItem('appUser');
  // }

}
