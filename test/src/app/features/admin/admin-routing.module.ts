import { NgModule } from '@angular/core';
import {AdminComponent} from './admin.component';
import {RouterModule, Routes} from '@angular/router';
import {PatientsComponent} from './patients/patients.component';
import {ImitationsComponent} from './imitations/imitations.component';
import {AddpatientComponent} from './addpatient/addpatient.component';
import {AddimitationComponent} from './addimitation/addimitation.component';


const routes: Routes = [
   {path: 'admin', component: AdminComponent},
   {path: 'patients', component: PatientsComponent},
   {path: 'imitations', component: ImitationsComponent},
   {path: 'addpatient', component: AddpatientComponent},
   {path: 'addimitation', component: AddimitationComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
