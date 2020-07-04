import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() content: string = '';
  @Input() items: string[] = [];
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  emitEvent = (content: string) => this.clicked.emit(content);

}
