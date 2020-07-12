import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularMaterialModule } from './utils/angular-material/angular-material.module';

import { HeaderComponent } from './header/header.component';
import { LoaderModule } from './utils/loader/loader.module';
import { NotifierModule } from './utils/notifier/notifier.module';
import { AuthenticationModule } from './authentication/authentication.module';


import { JobsComponent } from './system/jobs/jobs.component';
import { SkillsComponent } from './system/skills/skills.component';
import { CandidatesComponent } from './system/candidates/candidates.component';
import { NewCandidateComponent } from './system/candidates/new-candidate/new-candidate.component';
import { UploadFileComponent } from './system/candidates/candidate/upload-file/upload-file.component';
import { CandidateComponent } from './system/candidates/candidate/candidate.component';
import { StageEvaluatorComponent } from './system/candidates/candidate/associate-job/stage-evaluator/stage-evaluator.component';
import { AssociateJobComponent } from './system/candidates/candidate/associate-job/associate-job.component';
import { NewJobComponent } from './system/jobs/new-job/new-job.component';



import { UserComponent } from './system/user/user.component';
import { JobComponent } from './system/jobs/job/job.component';
import { SkillComponent } from './system/skills/skill/skill.component';
import { StagesComponent } from './system/jobs/job/stages/stages.component';
import { ResultComponent } from './system/jobs/job/result/result.component';
import { NewUserComponent } from './system/user/new-user/new-user.component';
import { NewSkillComponent } from './system/skills/new-skill/new-skill.component';
import { StageComponent } from './system/jobs/job/stages/stage/stage.component';
import { EvaluationsComponent } from './system/evaluations/evaluations.component';
import { NewStageComponent } from './system/jobs/job/new-stage/new-stage.component';
import { EvaluationComponent } from './system/evaluations/evaluation/evaluation.component';
import { EvaluateComponent } from './system/evaluations/evaluation/evaluate/evaluate.component';
import { CandidateResultComponent } from './system/jobs/job/result/candidate-result/candidate-result.component';
import { StageResultComponent } from './system/jobs/job/result/candidate-result/stage-result/stage-result.component';
import { SkillResultComponent } from './system/jobs/job/result/candidate-result/stage-result/skill-result/skill-result.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';

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
    StageEvaluatorComponent,
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
    NotifierModule,
    AngularMaterialModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatRadioModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    PdfViewerModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
