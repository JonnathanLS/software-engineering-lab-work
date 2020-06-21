import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AuthenticationComponent]
})
export class AuthenticationModule { }
