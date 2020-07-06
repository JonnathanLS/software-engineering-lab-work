import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationGuardService } from './authentication/authentication-guard.service';
import { UserConfigComponent } from './user-config/user-config.component';
import { JobsComponent } from './jobs/jobs.component';
import { SkillsComponent } from './skills/skills.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthenticationComponent },
  // {
  //   path: 'home', canActivate: [AuthenticationGuardService],
  //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  // },
  { path: 'evaluations', canActivate: [AuthenticationGuardService], component: EvaluationsComponent },
  { path: 'jobs', canActivate: [AuthenticationGuardService], component: JobsComponent },
  { path: 'skills', canActivate: [AuthenticationGuardService], component: SkillsComponent },
  { path: 'users', canActivate: [AuthenticationGuardService], component: UserConfigComponent },
  { path: 'candidates', canActivate: [AuthenticationGuardService], component: CandidatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
