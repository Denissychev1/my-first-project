import { NgModule } from '@angular/core';
import {PatientsComponent} from "../patients/patients.component";
import {ImitationsComponent} from "../imitations/imitations.component";
import {RouterModule, Routes} from "@angular/router";



const routes: Routes = [
  {path:'paients', component: PatientsComponent},
  {path:'imitations', component: ImitationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminModule { }
