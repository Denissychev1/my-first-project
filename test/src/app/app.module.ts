import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {NgbButtonsModule, NgbDropdownModule, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserModule} from './features/user/user.module';
import {AdminModule} from './features/admin/admin.module';
import {LoginModule} from './features/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbButtonsModule,
    NgbProgressbarModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule.forRoot(),
    UserModule.forRoot(),
    LoginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
