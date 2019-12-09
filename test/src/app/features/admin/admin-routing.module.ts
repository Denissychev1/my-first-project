import { NgModule } from '@angular/core';
import {AdminComponent} from './admin.component';
import {RouterModule, Routes} from '@angular/router';
import {PatientsComponent} from './patients/patients.component';
import {AddpatientComponent} from './addpatient/addpatient.component';
import {AddimitationComponent} from './addimitation/addimitation.component';
import {TestsComponent} from './tests/tests.component';
import {ImitationeditComponent} from './questions/questions.component';


const routes: Routes = [
   {path: '', component: AdminComponent},
   {path: 'patients', component: PatientsComponent},
   {path: 'tests', component: TestsComponent},
   {path: 'addpatient', component: AddpatientComponent},
   {path: 'addimitation', component: AddimitationComponent},
  {path: 'edit', component: ImitationeditComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
