// reactive form with validations 
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from '../models/AppUser';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loggedInData: AppUser;
  userMessage: string = '';
  allUsers: any = [];

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.loggedInData = {
      userName: '',
      password: ''
    };
    this.loginForm = formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
    });

  };

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  submitLogin = () => {
    console.log(this.loginForm.value.userName);
    this.userService.getAllUsers().subscribe((userResp) => {
      this.allUsers = userResp.valueOf();
      for (const u of this.allUsers) {
        if ((u.userName === this.loginForm.value.userName)
          && (u.password === this.loginForm.value.password)) {
          console.log(u.userName);
          console.log(this.loginForm.value.userName);
          localStorage.setItem('appUser', u.userName);
          this.loginForm.reset();
          console.log('login', localStorage.getItem('appUser'));
          this.router.navigate(['home']);
        }
      }
    });
  };
}

 //  // reactive form with validations 
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AppUser } from '../models/AppUser';
// import { UserService } from '../services/user/user.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   loginForm: FormGroup;
//   loggedInData: AppUser;
//   userMessage: string = '';

//   constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
//     this.loggedInData = {
//       userName: '',
//       password: ''
//     };
//     this.loginForm = formBuilder.group({
//       userName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
//       password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
//     });

//   };

//   ngOnInit(): void {
//     this.loginForm = new FormGroup({
//       userName: new FormControl(''),
//       password: new FormControl('')
//     });
//   }

//   submitLogin = () => {
//     console.log(this.loginForm.value);
//     this.userService.login(this.loginForm.value)
//       .subscribe((resp) => {
//         if (JSON.stringify(resp).length > 2) {
//           this.loggedInData = JSON.parse(JSON.stringify(resp).substring(1, JSON.stringify(resp).length - 1));
//           if (this.loggedInData.userName === this.loginForm.value.userName) {
//             localStorage.setItem('appUser', this.loggedInData.userName);
//             this.loginForm.reset();
//             console.log('login', localStorage.getItem('appUser'));
//             this.router.navigate(['home']);
//           }
//         }
//         else {
//           this.loginForm.reset();
//           this.userMessage = 'Invalid credentials!';
//         }
//       });
//   };
// }


// // reactive form 
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   loginForm: FormGroup;

//   // 1 
//   constructor() {
//     this.loginForm = new FormGroup({});
//   };

//   loggedInData = {
//     userName: '',
//     password: ''
//   };

//   // 2 
//   ngOnInit(): void {
//     this.loginForm = new FormGroup({
//       userName: new FormControl(''),
//       password: new FormControl('')
//     }); 
//   }

//   submitLogin = () => {
//     this.loggedInData = this.loginForm.value;
//     console.log(this.loginForm.value);
//   };

// }

// https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit


// method === function === hook === subroutine === routine 

// angular lifecycle hooks 



// template-driven form 
// import { Component} from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent  {

//   loggedInData = {
//     userName: '',
//     password: ''
//   };

//   submittedData = {
//     userName: '',
//     password: ''
//   };

//   submitLogin = (login: any) => {
//     console.log(login.value);
//     this.submittedData = login.value;
//   };

// }










