import { Component, OnInit } from '@angular/core';
import { NotifierService } from './notifier.service';
import { Notifier, NotifierPosition } from './notifier';
import { HttpClient } from '@angular/common/http';

interface Notifiers {
   position: NotifierPosition;
   notifiers: Notifier[];
}
@Component({
   selector: 'app-notifier',
   templateUrl: './notifier.component.html',
   styleUrls: ['./notifier.component.css'],
})
export class NotifierComponent implements OnInit {
   notifiers: Notifiers[] = [
      { position: NotifierPosition.TOP, notifiers: Array<Notifier>() },
      { position: NotifierPosition.BOTTOM, notifiers: Array<Notifier>() },
   ]
   constructor( private notifierService: NotifierService ) { }

   ngOnInit() {
      this.notifierService.init().subscribe(notifier =>{
         let arrayNotifiers = this.notifiers
            .filter(obj => obj.position === notifier.options.position)[0].notifiers;
         arrayNotifiers = arrayNotifiers ? arrayNotifiers : [];
         arrayNotifiers.push(notifier);
         setTimeout( () => this.notifierService.remove(notifier, arrayNotifiers), notifier.options.millisecs);
      });
   }
}
