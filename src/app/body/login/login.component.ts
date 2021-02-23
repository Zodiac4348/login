import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { LoginService } from 'src/app/services/login/login.service';
import * as LoginAction from 'src/app/store/actions/login.action';
import { LoginDetails } from 'src/app/model/logindetails.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  isUsernameValid: boolean = true;
  isPasswordValid: boolean = true;
  validLoginCredential: boolean = true;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { 
    
  }

  ngOnInit(): void {
    this.checkUserCredentials();
  }

  checkUserCredentials(): void {
    this.store.select<any>('login').subscribe(data => {
      if(data.length > 0) {
        this.router.navigate(['home']);
      }
    });
  }

  submit(): void {
    this.isUsernameValid = this.username.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi)?
      true: false;
    this.isPasswordValid = this.password.length >= 6 && this.password.length <= 20;

    if(this.isUsernameValid && this.isPasswordValid) {
      let loginDetails: LoginDetails = {
        username: this.username,
        password: this.password
      }

      this.store.dispatch(new LoginAction.AddLogin(loginDetails));
      this.router.navigate(['home']);
    } 
  }

  // getLoginDetaisl() {
  //   this.loginService.getLoginDetails().subscribe(data => {
  //     this.validLoginCredential = true;
  //     let validLogin: boolean = false;

  //     if(data.length > 0) {
  //       data.forEach(d => {
  //         if(d['username'] == this.username && d['password'] == this.password) {
  //           validLogin = true;
  //           this.router.navigate(['home']);
  //         }
  //       });
  //     }

  //     if(!validLogin) {
  //       this.validLoginCredential = false;
  //     }
  //   });
  // }

}
