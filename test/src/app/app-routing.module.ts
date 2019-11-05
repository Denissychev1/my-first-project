import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelpComponent} from "./features/help/help.component";
import {LkComponent} from "./features/lk/lk.component"
import {AdminComponent} from "./features/admin/admin.component";
import {TestsComponent} from "./features/tests/tests.component";
import {ProgressComponent} from "./features/progress/progress.component";
import {PatientsComponent} from "./features/patients/patients.component";
import {ImitationsComponent} from "./features/imitations/imitations.component";
import {AddpatientComponent} from "./features/addpatient/addpatient.component";
import {AddimitationComponent} from "./features/addimitation/addimitation.component";
import {ChoiseComponent} from "./features/choise/choise.component";



const routes: Routes = [
  { path: 'lk', component: LkComponent },
  { path: 'help', component: HelpComponent },
  {path: 'admin', component: AdminComponent},
  {path: 'tests', component: TestsComponent},
  {path: 'progress', component: ProgressComponent},
  {path:'patients', component: PatientsComponent},
  {path:'imitations', component: ImitationsComponent},
  {path:'addpatient', component: AddpatientComponent},
  {path:'addimitation', component: AddimitationComponent},
  {path:'choise', component: ChoiseComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
