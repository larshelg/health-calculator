import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {FormService} from '../form.service';

@Component({
  selector: 'app-chads-controller',
  template: `<div class="container">
    <app-chads-form
      [counter]="counter"
      [risiko]="risiko"
    >
    </app-chads-form>
    </div>`,
  styleUrls: []
})
export class ChadsControllerComponent {

  counter = 0;
  risiko = "Evnt Albyl-E";
  subscriptionone: Subscription;
  subscriptiontwo: Subscription;

  constructor(private form: FormService){


    form.counter$.subscribe(res => {

      if(res['op'] === "single"){
        this.counter = res['val'] ? this.counter + 1 : this.counter - 1;
      }
      else {
        this.counter = res['val'] ? this.counter + 2 : this.counter - 2;
      }


      if (this.counter === 0) {
        this.risiko= "Lav risiko for hjerneslag.";
      }
      else if (this.counter === 1) {
        this.risiko = "Moderat risiko for hjerneslag. Blodfortynnende bør vurderes.";
      }
      else if (this.counter >= 2) {
        this.risiko = "Høy risiko for hjerneslag. Blodfortynnende anbefales.";
      }


    });

  }

}
