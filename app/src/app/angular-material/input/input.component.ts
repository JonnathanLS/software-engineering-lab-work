import { Component, OnInit, Input } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() formControlName: FormControlName;
  @Input() content: string;
  @Input() placeholder: string = 'Conteúdo do Placeholder';
  ngOnInit(): void {
    if (!this.formControlName || !!this.content)
      throw new Error("InputComponent : há propriedades que precisam sere informadas.")
  }
}