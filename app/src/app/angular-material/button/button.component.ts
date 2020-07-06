import { Component, OnInit, Input } from '@angular/core';
import { propertiesInputAngularInvalid } from 'src/app/utils/utils';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() styleFormat: string;

  constructor() { }

  ngOnInit(): void {
    propertiesInputAngularInvalid("InputComponent", this.text, this.styleFormat);
  }

}
