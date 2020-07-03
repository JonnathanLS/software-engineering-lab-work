import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {

  formSelect = new FormControl();

  @Input() label: string;
  @Input() list: any[];
 
  constructor() { }

  ngOnInit(): void {
    console.log(this.label, this.list)
  }

}
