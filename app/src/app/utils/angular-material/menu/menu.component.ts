import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() text: string = '';
  @Input() items: string[] = [];
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  emitEvent = (item: string) => this.clicked.emit(item);

}
