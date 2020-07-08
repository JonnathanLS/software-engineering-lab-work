import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationGuardService } from './authentication/authentication-guard.service';
import { JobsComponent } from './jobs/jobs.component';
import { SkillsComponent } from './skills/skills.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { ResultComponent } from './jobs/job/result/result.component';

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
