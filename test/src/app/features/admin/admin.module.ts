import { NgModule } from '@angular/core';
import {PatientsComponent} from "../patients/patients.component";
import {ImitationsComponent} from "../imitations/imitations.component";
import {RouterModule, Routes} from "@angular/router";
import {AddpatientComponent} from "../addpatient/addpatient.component";
import {AddimitationComponent} from "../addimitation/addimitation.component";
import {AppModule} from "../../app.module";
import {PatientsGuard} from "../patients.guard";
const routes: Routes = [
  {path:'patients', component: PatientsComponent},
  {path:'imitations', component: ImitationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminModule { }
