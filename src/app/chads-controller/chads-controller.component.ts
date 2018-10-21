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
  subscription: Subscription;

  constructor(private form: FormService){

    this.subscription = form.counter$.subscribe(

      op => {
          if('one' in op){
            this.counter = op['one'] ? this.counter + 1 : this.counter - 1;
          }
          if('two' in op){
            this.counter = op['two'] ? this.counter + 2 : this.counter - 2;
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
