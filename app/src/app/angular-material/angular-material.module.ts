import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { MultiSelectComponent } from './multi-select/multi-select.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [MultiSelectComponent, MenuComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [MultiSelectComponent, MenuComponent]
})
export class AngularMaterialModule { }
