import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationGuardService } from './authentication/authentication-guard.service';
import { AddJobComponent } from './add-job/add-job.component';
import { UserConfigComponent } from './user-config/user-config.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthenticationComponent },
  { 
    path: 'home', 
    canActivate: [AuthenticationGuardService],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: 'add-job', canActivate: [AuthenticationGuardService], component: AddJobComponent },
  { path: 'user-config', canActivate: [AuthenticationGuardService], component: UserConfigComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
