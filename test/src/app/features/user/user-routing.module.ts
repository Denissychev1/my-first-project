import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LkComponent} from './lk/lk.component'
import {HelpComponent} from './help/help.component';
import {ProgressComponent} from './progress/progress.component';
import {ImitationsComponent} from './imitations/imitations.component';

const routes: Routes = [
  {path: '', redirectTo: 'lk', pathMatch: 'full'},
  {path: 'lk', component: LkComponent},
  {path: 'imitations', component: ImitationsComponent},
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
