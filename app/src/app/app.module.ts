import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { AuthenticationModule } from './authentication/authentication.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobsComponent } from './jobs/jobs.component';
import { SkillsComponent } from './skills/skills.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CandidatesComponent } from './candidates/candidates.component';
import { NewCandidateComponent } from './candidates/new-candidate/new-candidate.component';
import { UploadFileComponent } from './candidates/candidate/upload-file/upload-file.component';
import { CandidateComponent } from './candidates/candidate/candidate.component';
import { StageEvaluatorComponent } from './candidates/candidate/associate-job/stage-evaluator/stage-evaluator.component';
import { AssociateJobComponent } from './candidates/candidate/associate-job/associate-job.component';
import { NewJobComponent } from './jobs/new-job/new-job.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { JobComponent } from './jobs/job/job.component';
import { NewStageComponent } from './jobs/job/new-stage/new-stage.component';
import { StagesComponent } from './jobs/job/stages/stages.component';
import { StageComponent } from './jobs/job/stages/stage/stage.component';
import { NewSkillComponent } from './skills/new-skill/new-skill.component';
import { SkillComponent } from './skills/skill/skill.component';
import { LoaderModule } from './loader/loader.module';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { EvaluationComponent } from './evaluations/evaluation/evaluation.component';
import { EvaluateComponent } from './evaluations/evaluation/evaluate/evaluate.component';
import { UserComponent } from './user/user.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { ResultComponent } from './jobs/job/result/result.component';
import { CandidateResultComponent } from './jobs/job/result/candidate-result/candidate-result.component';
import { StageResultComponent } from './jobs/job/result/candidate-result/stage-result/stage-result.component';
import { SkillResultComponent } from './jobs/job/result/candidate-result/stage-result/skill-result/skill-result.component';

@NgModule({
  declarations: [
    AppComponent,
    StageComponent,
    StagesComponent,
    JobsComponent,
    SkillsComponent,
    CandidatesComponent,
    NewCandidateComponent,
    UploadFileComponent,
    CandidateComponent,
    AssociateJobComponent,
    StageEvaluatorComponent,
    NewJobComponent,
    JobComponent,
    NewStageComponent,
    NewSkillComponent,
    SkillComponent,
    EvaluateComponent,
    EvaluationComponent,
    EvaluationsComponent,
    UserComponent,
    NewUserComponent,
    HeaderComponent,
    ResultComponent,
    CandidateResultComponent,
    StageResultComponent,
    SkillResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LoaderModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatButtonModule,
    MatTabsModule,
    MatRadioModule,
    MatIconModule,
    MatListModule,

    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
