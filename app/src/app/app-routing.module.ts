import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoutComponent } from './authentication/logout/logout.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationGuardService } from './authentication/authentication-guard.service';

import { UserComponent } from './system/user/user.component';
import { JobsComponent } from './system/jobs/jobs.component';
import { SkillsComponent } from './system/skills/skills.component';
import { ResultComponent } from './system/jobs/job/result/result.component';
import { CandidatesComponent } from './system/candidates/candidates.component';
import { EvaluationsComponent } from './system/evaluations/evaluations.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthenticationComponent },
  { path: 'jobs', canActivate: [AuthenticationGuardService], component: JobsComponent },
  { path: 'user', canActivate: [AuthenticationGuardService], component: UserComponent },
  { path: 'skills', canActivate: [AuthenticationGuardService], component: SkillsComponent },
  { path: 'candidates', canActivate: [AuthenticationGuardService], component: CandidatesComponent },
  { path: 'evaluations', canActivate: [AuthenticationGuardService], component: EvaluationsComponent },
  { path: 'logout', canActivate: [AuthenticationGuardService], component: LogoutComponent },
  { path: 'jobs/:id/results', canActivate: [AuthenticationGuardService], component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
