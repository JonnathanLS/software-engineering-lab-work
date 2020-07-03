import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MultiSelectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [ MultiSelectComponent]
})
export class AngularMaterialModule { }
