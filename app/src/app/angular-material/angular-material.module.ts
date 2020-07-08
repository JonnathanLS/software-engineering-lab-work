import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

import { MenuComponent } from './menu/menu.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [MenuComponent, ButtonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Mat Modules
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
  ],
  exports: [MenuComponent, ButtonComponent]
})
export class AngularMaterialModule { }
