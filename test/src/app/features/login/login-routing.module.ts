import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogiinComponent} from './logiin/logiin.component';
import {LoginComponent} from './login.component';

const loginroutes: Routes = [
  {
    path: '', component: LogiinComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(loginroutes)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
