import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationGuardService } from './authentication/authentication-guard.service';
import { UserConfigComponent } from './user-config/user-config.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthenticationComponent },
  { 
    path: 'home', 
    canActivate: [AuthenticationGuardService],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: 'jobs', canActivate: [AuthenticationGuardService], component: JobsComponent },
  { path: 'users', canActivate: [AuthenticationGuardService], component: UserConfigComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
