import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';
import { AuthGuardService } from './guard/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/account/login',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
  },
  {
    path: '',
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService],
    children: [
      {
        path: 'user',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
      },
      {
        path: 'gamefication',
        loadChildren: () => import('./modules/gamefication/gamefication.module')
        .then(m => m.GameficationModule)
      },
      {
        path: 'collaborator',
        loadChildren: () => import('./modules/collaborator/collaborator.module')
        .then(m => m.CollaboratorModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
