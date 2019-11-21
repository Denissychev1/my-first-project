import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LkComponent} from './lk/lk.component';
import {TestsComponent} from './tests/tests.component';
import {HelpComponent} from './help/help.component';
import {ProgressComponent} from './progress/progress.component';

const routes: Routes = [
  {path: '', redirectTo: 'lk', pathMatch: 'full'},
  {path: 'lk', component: LkComponent},
  {path: 'tests', component: TestsComponent},
  {path: 'help', component: HelpComponent},
  {path: 'progress', component: ProgressComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UserRoutingModule { }
