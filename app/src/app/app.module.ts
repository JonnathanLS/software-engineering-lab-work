import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { AuthenticationModule } from './authentication/authentication.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { UserConfigComponent } from './user-config/user-config.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobsComponent } from './jobs/jobs.component';
import { StagesComponent } from './jobs/stages/stages.component';
import { SkillsComponent } from './skills/skills.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CandidatesComponent } from './candidates/candidates.component';
import { NewCandidateComponent } from './candidates/new-candidate/new-candidate.component';
import { UploadFileComponent } from './candidates/candidate/upload-file/upload-file.component';
import { CandidateComponent } from './candidates/candidate/candidate.component';
import { StageEvaluatorComponent } from './candidates/candidate/associate-job/stage-evaluator/stage-evaluator.component';
import { AssociateJobComponent } from './candidates/candidate/associate-job/associate-job.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StagesComponent,
    JobsComponent,
    UserConfigComponent,
    SkillsComponent,
    CandidatesComponent,
    NewCandidateComponent,
    UploadFileComponent,
    CandidateComponent,
    AssociateJobComponent,
    StageEvaluatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    HomeModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
