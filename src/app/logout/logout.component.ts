import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router) { };

  submitLogout = () => {
    localStorage.removeItem('appUser');
    localStorage.clear();
    this.router.navigate(['home']);
    console.log('logout', localStorage.getItem('appUser'));
  };
}

