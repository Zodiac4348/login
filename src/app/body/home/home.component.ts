import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as LoginAction from 'src/app/store/actions/login.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.store.select<any>('login').subscribe(data => {
      if(data.length > 0) {
        this.store.dispatch(new LoginAction.RemoveLogin(data[0]['username']));
      }
    });
  }

}
