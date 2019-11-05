import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LkComponent } from './features/lk/lk.component';
import { HelpComponent } from './features/help/help.component';
import {TestsComponent} from "./features/tests/tests.component";
import { AdminComponent } from './features/admin/admin.component';
import { ProgressComponent } from './features/progress/progress.component';
import { PatientsComponent } from './features/patients/patients.component';
import { ImitationsComponent } from './features/imitations/imitations.component';
import {FormsModule} from "@angular/forms";
import { AddpatientComponent } from './features/addpatient/addpatient.component';
import { AddimitationComponent } from './features/addimitation/addimitation.component';
import { ChoiseComponent } from './features/choise/choise.component';
import {NgbButtonsModule, NgbDropdownModule, NgbProgressbarModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    AppComponent,
    LkComponent,
    HelpComponent,
    TestsComponent,
    AdminComponent,
    ProgressComponent,
    PatientsComponent,
    ImitationsComponent,
    AddpatientComponent,
    AddimitationComponent,
    ChoiseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbButtonsModule,
    NgbProgressbarModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
