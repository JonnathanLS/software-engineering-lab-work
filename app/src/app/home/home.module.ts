import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '../api/api.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApiModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
