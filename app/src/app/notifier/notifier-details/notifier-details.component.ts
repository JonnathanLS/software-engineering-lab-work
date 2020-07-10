import { Component, OnInit, Input } from '@angular/core';
import { Notifier, NotifierPosition } from '../notifier';
import { NotifierService } from '../notifier.service';
import {
   trigger,
   state,
   style,
   animate,
   transition,
   keyframes,
} from '@angular/animations';


const notifierInsertRemoveTrigger = trigger('notifierInsertRemoveTrigger', [
   transition(':enter', [
      style({ opacity: 0 }),
      animate('1s ease',  keyframes([
         style({ opacity: 0, offset: 0 }),
         style({ opacity: 0.8,  offset: 1 })
      ])),
   ]),
   transition(':leave', [
      animate('1s ease',  keyframes([
         style({ opacity: 0.8, offset: 0 }),
         style({ opacity: 0,  offset: 1 })
      ]))
   ])
])

@Component({
   selector: 'app-notifier-details',
   templateUrl: './notifier-details.component.html',
   styleUrls: ['./notifier-details.component.css'],
   animations: [ notifierInsertRemoveTrigger ],
})
export class NotifierDetailsComponent implements OnInit {
   @Input() notifiers: Notifier[];
   @Input() position: string;

   constructor(
      private serviceNotifier: NotifierService
   ) { }

   ngOnInit() {
      const position = "notifier-position-" + ( this.position ? this.position : NotifierPosition.TOP );
      this.position = `notifier-position ${position}`
   }

   close(notifier: Notifier){
      this.serviceNotifier.remove(notifier, this.notifiers);
   }

}
