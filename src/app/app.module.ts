import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './body/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './body/home/home.component';
import { RouterModule } from '@angular/router';
import { StoreModule, ReducerManager, ReducerManagerDispatcher } from '@ngrx/store';
import { reducer } from 'src/app/store/reducers/login.reducer';
import { LoginService } from './services/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    StoreModule.forRoot({
      login: reducer
    })
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
