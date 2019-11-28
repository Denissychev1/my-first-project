import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LogiinComponent} from './logiin/logiin.component';
import {LoginRoutingModule} from './login-routing.module';
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';


@NgModule({
  declarations: [LoginComponent, LogiinComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  bootstrap: [LogiinComponent]
})
export class LoginModule {

  static forRoot() {
    return LoginModule;
  }
}

