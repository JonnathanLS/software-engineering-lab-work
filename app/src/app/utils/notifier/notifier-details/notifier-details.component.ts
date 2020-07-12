import { Component, OnInit, Input } from '@angular/core';
import { Notifier, NotifierPosition } from '../notifier';
import { NotifierService } from '../notifier.service';
import { opacityEnterLeaveTrigger } from 'src/app/utils/utils';

@Component({
   selector: 'app-notifier-details',
   templateUrl: './notifier-details.component.html',
   styleUrls: ['./notifier-details.component.css'],
   animations: [ opacityEnterLeaveTrigger ],
})
export class NotifierDetailsComponent implements OnInit {
   @Input() notifiers: Notifier[];
   @Input() position: string;

   constructor( private serviceNotifier: NotifierService ) { }

   ngOnInit() {
      const position = "notifier-position-" + ( this.position ? this.position : NotifierPosition.TOP );
      this.position = `notifier-position ${position}`
   }

   close = (notifier: Notifier) => this.serviceNotifier.remove(notifier, this.notifiers);
}
