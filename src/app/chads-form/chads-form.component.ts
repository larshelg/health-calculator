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

  count(value) {
    this.form.doCount(value);
  }

  ngOnInit() {
  }

}
