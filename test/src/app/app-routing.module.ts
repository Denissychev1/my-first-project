import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminGuard} from './features/admin/admin.guard';
import {PatientsGuard} from './features/patients.guard';
import {AuthGuard} from './features/auth.guard';
import {ChoiseComponent} from './features/choise/choise.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./features/user/user.module').then (m => m.UserModule),
    canActivate: [AuthGuard]
  },
  { path: '', component: ChoiseComponent },
  { path: '**', component: ChoiseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AdminGuard, PatientsGuard, AuthGuard]
})
export class AppRoutingModule {
}
