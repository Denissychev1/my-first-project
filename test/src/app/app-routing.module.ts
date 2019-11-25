import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminGuard} from './features/admin/admin.guard';
import {PatientsGuard} from './features/patients.guard';
import {AuthGuard} from './features/auth.guard';

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
  {path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule), },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule],
  providers: [AdminGuard, PatientsGuard, AuthGuard]
})
export class AppRoutingModule {




}
