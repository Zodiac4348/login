import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.isUsernameValid = this.username.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi)?
      true: false;
    this.isPasswordValid = this.password.length >= 6 && this.password.length <= 20;

    if(this.isUsernameValid && this.isPasswordValid) {
      this.router.navigate(['home']);
    } 
  }

}
