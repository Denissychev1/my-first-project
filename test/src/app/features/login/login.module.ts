import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LogiinComponent} from './logiin/logiin.component';
import {LoginRoutingModule} from './login-routing.module';


@NgModule({
  declarations: [LoginComponent, LogiinComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule {

  static forRoot() {
    return LoginModule;
  }
}

