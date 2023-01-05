// reactive form with validations 
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from '../models/AppUser';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  userMessage: string = '';

  // 1 
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.registerData = {
      userName: '',
      password: ''
    };
    this.registerForm = formBuilder.group({
      userName: ['', Validators.required, Validators.minLength(6), Validators.maxLength(32)],
      password: ['', Validators.required, Validators.minLength(6), Validators.maxLength(32)],
    });

  };

  registerData: AppUser;

  // 2 
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  submitRegister = () => {
    this.registerData = this.registerForm.value;
    console.log(this.registerForm.value);
    this.userService.findByUserName(this.registerForm.value.userName)
      .subscribe((resp) => {
        if (JSON.stringify(resp).length > 2) {
          let temp = JSON.parse(JSON.stringify(resp).substring(1, JSON.stringify(resp).length - 1));
          if (temp.userName === this.registerForm.value.userName) {
            this.userMessage = 'Username already exists!';
            this.registerForm.reset();
          }
        }
        else {
          this.userService.register(this.registerForm.value)
            .subscribe((resp) => {
              console.log(resp.valueOf());
              alert(`${this.registerForm.value.userName} registered successfully! Please login now.`);
              this.registerForm.reset();
              this.router.navigate(['login']);
            });
        }
      });
  };
}


