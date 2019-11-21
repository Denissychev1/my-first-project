import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {PatientsComponent} from './patients/patients.component';
import {ImitationsComponent} from './imitations/imitations.component';
import {FormsModule} from '@angular/forms';
import {AddpatientComponent} from './addpatient/addpatient.component';
import {AddimitationComponent} from './addimitation/addimitation.component';
import {NgbButtonsModule, NgbDropdownModule, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AdminComponent,
    PatientsComponent,
    ImitationsComponent,
    AddpatientComponent,
    AddimitationComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgbButtonsModule,
    NgbProgressbarModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule {
}
