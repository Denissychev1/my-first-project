import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelpComponent} from "./features/help/help.component";
import {lkComponent} from "./features/lk/lk.component"



const routes: Routes = [
  { path: 'lk', component: lkComponent },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
