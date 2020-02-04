import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  title = 'firebaseLogin';

  selectedVal: string;
  responseMessage: string;
  responseMessageType: string;
  emailInput: string;
  passwordInput: string;
  isForgotPassword: boolean;
  userDetails: any;


  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.selectedVal = 'login';
    this.isForgotPassword = false;
  }

  // Comman Method to Show Message and Hide after 2 seconds
  showMessage(type, msg) {
    this.responseMessageType = type;
    this.responseMessage = msg;
    setTimeout(() => {
      this.responseMessage = '';
    }, 2000);
  }

  // Called on switching Login/ Register tabs
  public onValChange(val: string) {
    this.showMessage('', '');
    this.selectedVal = val;
  }

  // Check localStorage is having User Data
  isUserLoggedIn() {
    this.userDetails = this.authService.isUserLoggedIn();
  }

  // SignOut Firebase Session and Clean LocalStorage
  logoutUser() {
    this.authService.logout()
      .then(res => {
        console.log(res);
        this.userDetails = undefined;
        localStorage.removeItem('user');
      }, err => {
        this.showMessage('danger', err.message);
      });
  }

  // Login user with  provided Email/ Password
  loginUser() {
    this.responseMessage = '';
    this.authService.login(this.emailInput, this.passwordInput)
      .then(res => {
        console.log(res);
        this.showMessage('success', 'Successfully Logged In!');
        this.isUserLoggedIn();
        this.router.navigate(['./home']);
      }, err => {
        this.showMessage('danger', 'Error al inicia sesion');
      });
  }
}
