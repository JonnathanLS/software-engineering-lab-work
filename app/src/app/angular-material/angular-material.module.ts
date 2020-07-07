import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

import { MultiSelectComponent } from './multi-select/multi-select.component';
import { MenuComponent } from './menu/menu.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ExpansionPainelComponent } from './expansion-painel/expansion-painel.component';

@NgModule({
  declarations: [MultiSelectComponent, MenuComponent, ButtonComponent, InputComponent, ExpansionPainelComponent],
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
  exports: [MultiSelectComponent, MenuComponent, ButtonComponent, InputComponent]
})
export class AngularMaterialModule { }
