import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginLabels = [
    { label: 'Username', type: 'text' },
    { label: 'Password', type: 'password' },
  ];
  username: string;
  password: string;
  passwordDesc: string = "Password must be between 6 to 12 characters.";

  constructor() { }

  ngOnInit(): void {
  }

  getInput(type: string, input: string): void {
    if(type == 'text') {
      this.username = input;
    } else if(type == 'password') {
      this.password = input;
    }
  }

  submit(): void {
    console.log('USERNAME: ', this.username);
    console.log('PASSWORD: ', this.password);

    if(this.username && this.password) {
      alert('success');
    } else {
      alert('fail');
    }
  }

}
