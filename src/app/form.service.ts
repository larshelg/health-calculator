import {Injectable, OnInit} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FormService implements OnInit {

  // Observable string sources
  private eventsSource = new Subject();
  private counterSource = new Subject();

  // Observable string streams
  eventsConfirmed$ = this.eventsSource.asObservable();
  counter$ = this.counterSource.asObservable();

  constructor() { }

  ngOnInit(){
    console.log('init formservice');
  }


  doCount(value){
    this.counterSource.next(value);
  }

  confirmMission(value) {
    this.eventsSource.next(value);
  }

}
