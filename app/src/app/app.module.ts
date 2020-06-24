import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { AuthenticationModule } from './authentication/authentication.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AddJobComponent } from './add-job/add-job.component';
import { UserConfigComponent } from './user-config/user-config.component';
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';
import { AddStagesComponent } from './add-job/add-stages/add-stages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { StageComponent } from './add-job/add-stages/stage/stage.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddJobComponent,
    UserConfigComponent,
    AddStagesComponent,
    StageComponent,
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
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
