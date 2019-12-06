import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {PatientsComponent} from './patients/patients.component';
import {FormsModule} from '@angular/forms';
import {AddpatientComponent} from './addpatient/addpatient.component';
import {AddimitationComponent} from './addimitation/addimitation.component';
import {NgbButtonsModule, NgbDropdownModule, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TestsComponent} from './tests/tests.component';
import { ImitationeditComponent } from './imitationedit/imitationedit.component';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import { QuestioneditComponent } from './questionedit/questionedit.component';
import { AnswereditComponent } from './answeredit/answeredit.component';



@NgModule({
  declarations: [
    TestsComponent,
    AdminComponent,
    PatientsComponent,
    AddpatientComponent,
    AddimitationComponent,
    ImitationeditComponent,
    QuestioneditComponent,
    AnswereditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgbButtonsModule,
    NgbProgressbarModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [AnswereditComponent],
  providers: [],
  bootstrap: []
})
export class AdminModule {
  static forRoot() {
    return AdminModule;
  }
}
