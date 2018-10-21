import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {FormService} from '../form.service';

@Component({
  selector: 'app-chads-form',
  templateUrl: './chads-form.component.html',
  styleUrls: ['./chads-form.component.css']
})
export class ChadsFormComponent implements OnInit {

  @Input() counter;
  @Input() risiko;
  subscription: Subscription;

  constructor(private form: FormService) { }

  increment(value) {
    this.form.doCount({one: value});
  }

  double(value) {
    this.form.doCount( {two: value});
  }


  ngOnInit() {
  }

}
