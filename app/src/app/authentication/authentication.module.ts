import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../api/api.module';

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AuthenticationComponent]
})
export class AuthenticationModule { }
