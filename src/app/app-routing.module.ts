import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'calculate', pathMatch: 'full' },
  { 
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user-info',
    loadChildren: () => import('./userInfos/user-info/user-info.module').then(m => m.UserInfoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'calculate',
    loadChildren: () => import('./calculations/calculate/calculate.module').then(m => m.CalculatePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'get-code',
    loadChildren: () => import('./auth/getCode/get-code/get-code.module').then(m => m.GetCodePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
