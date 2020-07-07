import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { propertiesInputAngularInvalid } from '../utils/utils';
import { LoaderType } from './loader-type';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  public loader$: Observable<string>
  // message: string = '';

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.loader$ = this.loaderService.init().pipe(
      map(loaderType => {
        // if (loaderType === LoaderType.ENDING){
        //   if (this.message){
        //     this.message = '';
        //     // setTimeout(()=> this.message = '', 750);
        //   }
        // }
        return 'loader-' + loaderType.valueOf();
      })
    );
  }
}
