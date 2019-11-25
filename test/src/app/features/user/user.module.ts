import {NgModule} from '@angular/core';
import {UserRoutingModule} from './user-routing.module';
import {FormsModule} from '@angular/forms';
import {NgbButtonsModule, NgbDropdownModule, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ImitationsComponent} from './imitations/imitations.component';
import {HelpComponent} from './help/help.component';
import {LkComponent} from './lk/lk.component';
import {ProgressComponent} from './progress/progress.component';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {AuthGuard} from '../auth.guard';



@NgModule({
  declarations: [
    ImitationsComponent,
    HelpComponent,
    LkComponent,
    ProgressComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    NgbButtonsModule,
    NgbProgressbarModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: []
})
export class UserModule {
  static forRoot() {
    return UserModule;
  }
}
