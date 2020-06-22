import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../api/api.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticationGuardService } from './authentication-guard.service';

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ApiModule
  ],
  providers: [AuthenticationService, AuthenticationGuardService],
  bootstrap: [AuthenticationComponent]
})
export class AuthenticationModule { }
